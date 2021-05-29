import React, { createContext, useCallback, useContext, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { LoginProps, StorageContextData, StorageProviderProps } from './types'

export const StorageContext = createContext({} as StorageContextData)

export const StorageProvider = (props: StorageProviderProps) => {
  const { children } = props
  const [storageLoading, setStorageLoading] = useState(true)

  const storageKey = '@passmanager'

  const saveLogin = useCallback(async (login: LoginProps) => {
    try {
      setStorageLoading(true)
      const data = await AsyncStorage.getItem(`${storageKey}:logins`)
      const prevLogins = data ? (JSON.parse(data) as LoginProps[]) : []
      await AsyncStorage.setItem(
        `${storageKey}:logins`,
        JSON.stringify([...prevLogins, login])
      )
    } catch (err) {
      throw new Error(err)
    } finally {
      setStorageLoading(false)
    }
  }, [])

  const loadLogins = useCallback(async () => {
    try {
      setStorageLoading(true)
      const data = await AsyncStorage.getItem(`${storageKey}:logins`)
      return data ? (JSON.parse(data) as LoginProps[]) : []
    } catch (err) {
      throw new Error(err)
    } finally {
      setStorageLoading(false)
    }
  }, [])

  const clearLoginsStorage = useCallback(async () => {
    try {
      setStorageLoading(true)
      return await AsyncStorage.removeItem(`${storageKey}:logins`)
    } catch (err) {
      throw new Error(err)
    } finally {
      setStorageLoading(false)
    }
  }, [])

  const providerValues = {
    saveLogin,
    loadLogins,
    clearLoginsStorage,
    storageLoading,
  }

  return (
    <StorageContext.Provider value={providerValues}>{children}</StorageContext.Provider>
  )
}

export function useStorageData(): StorageContextData {
  const context = useContext(StorageContext)
  if (!context) {
    throw new Error('useStorageData must be used within a StorageProvider')
  }
  return context
}
