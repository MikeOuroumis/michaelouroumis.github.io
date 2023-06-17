import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar'

test('renders Navbar without crashing', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  )

  expect(screen.getByText('Michael Ouroumis')).toBeInTheDocument()
})

test('contains links', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  )

  expect(screen.getByText('About Me')).toBeInTheDocument()
  expect(screen.getByText('Portfolio')).toBeInTheDocument()
  expect(screen.getByText('Skills')).toBeInTheDocument()
})

test('contains social media links', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  )

  expect(screen.getByTestId('github-link')).toHaveAttribute(
    'href',
    'https://github.com/MikeOuroumis'
  )
  expect(screen.getByTestId('linkedin-link')).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/michael-ouroumis-76676022b/'
  )
})

test('Mobile menu opens and closes upon clicking', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  )

  const menuButton = screen.getByRole('button')
  fireEvent.click(menuButton)

  // After clicking, the mobile menu should be visible
  expect(screen.getByText('About Me')).toBeVisible()
  expect(screen.getByText('Portfolio')).toBeVisible()
  expect(screen.getByText('Skills')).toBeVisible()

  fireEvent.click(menuButton)

  // After clicking again, the mobile menu should not be visible
  expect(screen.getByText('About Me').parentElement).toHaveClass(
    'hidden md:flex'
  )
  expect(screen.getByText('Portfolio').parentElement).toHaveClass(
    'hidden md:flex'
  )

  expect(screen.getByText('Skills').parentElement).toHaveClass('hidden md:flex')
})
