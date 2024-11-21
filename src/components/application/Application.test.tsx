import { render, screen } from '@testing-library/react'
import Application from './Application'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)
    const nameElement = screen.getByDisplayValue('Wontae')
    expect(nameElement).toBeInTheDocument()

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    // expect(submitButtonElement).not.toBeDisabled() // Eslint error
    expect(submitButtonElement).toBeDisabled()
  })
})
