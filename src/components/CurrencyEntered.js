export default function CurrencyEntered({ onInputChange }) {
  return (
    <div>
      <input
        className="text-center rounded-lg"
        type="number"
        onChange={onInputChange}
      />
    </div>
  )
}
