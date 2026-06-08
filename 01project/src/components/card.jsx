import React from 'react'

function Card({ text, btnText }) {
  return (
    <div>
      <div className="max-w-sm mx-auto p-6 rounded-xl shadow-xl bg-black border border-zinc-800">
        <img
          src="https://picsum.photos/400/300?random=90"
          alt="Featured"
          className="w-full h-48 object-cover rounded-lg mb-6"
        />

        <h2 className="text-xl font-bold text-white mb-2">
          {text}
        </h2>

        <p className="text-gray-400 mb-4">
          Discover cutting-edge design patterns and UI components.
        </p>

        <button className="px-4 py-2 bg-white text-black rounded-lg">
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card