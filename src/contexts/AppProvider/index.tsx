import React from 'react'

import { StorageProvider } from '../StorageProvider'
import { AppProviderProps } from './types'

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props
  return <StorageProvider>{children}</StorageProvider>
}
