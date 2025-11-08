import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between items-center px-15 py-10 text-white'>
      <div className='text-3xl'>Ev-olution</div>
      <ul className='flex gap-20 items-center'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='px-5 py-1 bg-white text-gray-800 rounded-2xl'>Contact</li>
      </ul>
    </div>
  )
}

export default navbar
