import React from 'react'

const NewsLettersBox = () => {
    const onsubmithandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className="p-6 text-center">
      <p className="font-semibold text-lg">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, animi?
      </p>

      <form onSubmit={onsubmithandler} className="flex mt-6  border border-gray-300 rounded-xl overflow-hidden max-w-4xl mx-auto ">
        <input
          required
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-base outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLettersBox
