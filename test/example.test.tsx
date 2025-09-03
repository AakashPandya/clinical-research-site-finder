import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LegacyPage } from '../src/pages/LegacyPage'

describe('LegacyPage', () => {
  it('renders placeholder', () => {
    render(<LegacyPage />)
    expect(screen.getByText(/Legacy Page Placeholder/)).toBeInTheDocument()
  })
})
