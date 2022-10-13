export default function ToCurrency({ fromCurrency, onToSelectionChange }) {
  return (
    <div className=" flex items-center justify-center">
      <div className="text-white">TO</div>
      <div>
        <select className="m-5" onChange={onToSelectionChange}>
          <option hidden defaultValue="select">
            Select
          </option>
          {fromCurrency.map((eachItem) => (
            <option value={eachItem}>{eachItem}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
