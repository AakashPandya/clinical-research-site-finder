import React, { PropsWithChildren } from 'react'

// TODO: add Zustand store and other providers
export function AppProvider({ children }: PropsWithChildren) {
  return <>{children}</>
}
