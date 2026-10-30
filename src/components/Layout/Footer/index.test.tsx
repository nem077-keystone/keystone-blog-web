import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
  it('renders absolute navigation and contact links', () => {
    render(<Footer />)

    expect(screen.getByText('Legal')).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Privacy Policy' }).getAttribute('href')).toBe(
      'https://keyst.one/privacy-policy'
    )
    expect(screen.getByRole('link', { name: 'Support team' }).getAttribute('href')).toBe(
      'mailto:support@keyst.one'
    )
  })

  it('renders accessible social links and the current year', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Discord' }).getAttribute('href')).toBe(
      'https://keyst.one/discord'
    )
    expect(
      screen.getByText(`Keystone © All rights reserved 2018 - ${new Date().getFullYear()}`)
    ).toBeTruthy()
  })
})
