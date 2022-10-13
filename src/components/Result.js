export default function Result({ calculate, result }) {
  return (
    <div className="flex items-center justify-center gap-3 ">
      <div className="p-2  bg-blue-400 rounded-lg text-white">
        <button onClick={calculate}>CALCULATE</button>
      </div>
      <div className="p-2  bg-white rounded-lg min-w-[100px] min-h-[40px]">
        <h1>{result}</h1>
      </div>
    </div>
  )
}
