import { useState } from 'react'
import './App.css'

function App() {
  // Your exact state declaration
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      
      {/* Floating Bottom Toolbar Dock */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          {/* Button 1: Ruby Red */}
          <button
            onClick={() => setcolor("red")} // Fixed to match your lowercase 'setcolor'
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
          >
            Ruby Red
          </button>

          {/* Button 2: Emerald Green */}
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            Emerald Green
          </button>

          {/* Button 3: Sapphire Blue */}
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
          >
            Sapphire Blue
          </button>

           <button
            onClick={() => setcolor("orange")}
            className="outline-none px-4 py-4 rounded-e-full text-white shadow-sm"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

        </div>
      </div>

    </div>
  )
}

export default App
