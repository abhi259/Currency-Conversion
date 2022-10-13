import { useEffect, useState } from "react"
import CurrencyEntered from "./CurrencyEntered"
import FromCurrency from "./FromCurrency"
import ToCurrency from "./ToCurrency"
import Result from "./Result"

export default function Converter() {
  const [inputValue, setInputValue] = useState("")
  const [fromCurrency, setFromCurrency] = useState([])
  const [fromSelectedCurrency, setFromSelectedCurrency] = useState("")
  const [toSelectedCurrency, setToSelectedCurrency] = useState("")
  const [currencyValue, setCurrencyValue] = useState("")
  const [result, setResult] = useState()

  function onInputChange(event) {
    setInputValue(event.target.value)
  }
  function onFromSelectionChange(event) {
    setFromSelectedCurrency(event.target.value)
  }
  function onToSelectionChange(event) {
    setToSelectedCurrency(event.target.value)
  }

  useEffect(() => {
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089")

    ws.onopen = function (evt) {
      ws.send(
        JSON.stringify({
          payout_currencies: 1,
        })
      )
    }
    ws.onmessage = function (msg) {
      var data = JSON.parse(msg.data)
      setFromCurrency(data.payout_currencies)
    }
  }, [])

  useEffect(() => {
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089")

    ws.onopen = function (evt) {
      ws.send(
        JSON.stringify({
          exchange_rates: 1,
          base_currency: "USD",
        })
      )
    }
    ws.onmessage = function (msg) {
      var data = JSON.parse(msg.data)
      setCurrencyValue(data.exchange_rates.rates)
    }
  }, [])

  function calculate() {
    console.log(
      (parseInt(inputValue) / currencyValue[fromSelectedCurrency]) *
        currencyValue[toSelectedCurrency]
    )
    setResult(
      (parseInt(inputValue) / currencyValue[fromSelectedCurrency]) *
        currencyValue[toSelectedCurrency]
    )
  }

  return (
    <div>
      <CurrencyEntered onInputChange={onInputChange} />
      <FromCurrency
        fromCurrency={fromCurrency}
        onFromSelectionChange={onFromSelectionChange}
      />
      <ToCurrency
        fromCurrency={fromCurrency}
        onToSelectionChange={onToSelectionChange}
      />
      <Result calculate={calculate} result={result} />
    </div>
  )
}
