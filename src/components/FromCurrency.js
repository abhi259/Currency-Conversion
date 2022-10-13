export default function FromCurrency({ fromCurrency, onFromSelectionChange }) {
  return (
    <div className=" flex items-center justify-center">
      <div className="text-white">FROM</div>
      <div>
        <select className="m-5" onChange={onFromSelectionChange}>
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
