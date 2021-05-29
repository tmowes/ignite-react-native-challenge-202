import { ReactNode } from 'react'

export type StorageProviderProps = {
  children: ReactNode
}

export type StorageContextData = {
  saveLogin: (login: LoginProps) => Promise<void>
  loadLogins: () => Promise<LoginProps[]>
  clearLoginsStorage: () => Promise<void>
  storageLoading: boolean
}

export type LoginProps = {
  id: string
  title: string
  email: string
  password: string
}
