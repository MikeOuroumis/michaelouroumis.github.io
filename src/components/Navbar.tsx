import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles.css'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setClick(!click)
    }
  }

  return (
    <div className="flex items-center justify-between p-5 bg-blue-500">
      <Link to="/" className="text-white text-lg">
        Your Name
      </Link>
      <div
        className="md:hidden"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        {click ? (
          <FaTimes className="text-white" />
        ) : (
          <FaBars className="text-white" />
        )}
      </div>
      <div className={click ? 'flex flex-col md:flex-row' : 'hidden md:flex'}>
        <Link to="/about" className="mx-2 text-white md:mx-4">
          About Me
        </Link>
        <Link to="/portfolio" className="mx-2 text-white md:mx-4">
          Portfolio
        </Link>
        <Link to="/skills" className="mx-2 text-white md:mx-4">
          Skills
        </Link>
      </div>
    </div>
  )
}

export default Navbar
