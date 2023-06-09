import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
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
    <div className="relative bg-gray-800 h-20 flex justify-center items-center text-lg sticky top-0 z-50">
      <div className="flex justify-between items-center h-20 z-10 w-full mx-auto px-12">
        <Link to="/" className="gradient-text">
          Michael Ouroumis
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
        <div
          className={
            click
              ? 'transition-all ease-in-out duration-500 flex flex-col absolute top-full left-0 bg-gray-800 w-full items-center h-auto'
              : 'hidden md:flex'
          }
        >
          <Link
            to="/about"
            className="flex items-center mx-2 text-white md:mx-4 transition-colors duration-300 hover:text-green-400"
          >
            About Me
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center mx-2 text-white md:mx-4 transition-colors duration-300 hover:text-green-400"
          >
            Portfolio
          </Link>
          <Link
            to="/skills"
            className="flex items-center mx-2 text-white md:mx-4 transition-colors duration-300 hover:text-green-400"
          >
            Skills
          </Link>
          <div className="flex flex-row">
            <a
              href="https://github.com/MikeOuroumis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mx-2 text-white md:mx-4 p-2 rounded-lg transition-colors duration-300 hover:text-purple-400"
              data-testid="github-link"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-ouroumis-76676022b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mx-2 text-white md:mx-4 p-2 rounded-lg transition-colors duration-300 hover:text-purple-400"
              data-testid="linkedin-link"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
