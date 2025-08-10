import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  const colorChange = () => {
    setColor()
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl rounded-3xl bg-white px-3 py-2 '>
          <button className='outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg' onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-lg' onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg' onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full bg-yellow-400 text-black shadow-lg' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg' onClick={() => setColor("white")}>White</button>
          <button className='outline-none px-4 py-1 rounded-full bg-black text-white shadow-lg' onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
