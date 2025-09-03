import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LegacyPage } from '../pages/LegacyPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LegacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
