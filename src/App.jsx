import { useState } from 'react'

function App() {
  const [activeIdx, setActiveIdx] = useState(0)

  let steps = [1, 2, 3, 4, 5, 6]

  const handlePrev = () => {
    if (activeIdx > 0) {
      setActiveIdx((idx) => idx - 1)
    }
  }

  const handleNext = () => {
    if (activeIdx < steps.length - 1) {
      setActiveIdx((idx) => idx + 1)
    }
  }

  let width = (activeIdx / (steps.length - 1)) * 100 + '%'

  return (
    <main className='flex justify-center items-center h-screen'>
      <div>
        <h1 className='font-bold text-lg mb-8 text-center'>Progress Bar</h1>
        <div className='flex gap-12 relative transition'>
          <span className='absolute w-full bg-slate-200 h-1 top-1/2 transform -translate-y-1/2  -z-10' />
          <span
            className={`absolute duration-300 ${width} bg-blue-600 h-1 top-1/2 transform -translate-y-1/2 -z-10`}
            style={{ transition: '0.4s ease', width }}
          />
          {steps.map((n, idx) => (
            <div
              key={n}
              className={`bg-white w-7 h-7 flex justify-center items-center border-2 rounded-full transition duration-300 ${
                activeIdx >= idx && 'border-blue-600'
              }`}
            >
              {n}
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-8 gap-2'>
          <button
            onClick={handlePrev}
            className='px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-2xl disabled:bg-gray-400 disabled:cursor-not-allowed'
            disabled={activeIdx === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className='px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-2xl disabled:bg-gray-400 disabled:cursor-not-allowed'
            disabled={activeIdx === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
