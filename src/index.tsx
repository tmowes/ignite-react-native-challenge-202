import React from 'react'
import { StatusBar } from 'react-native'

import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import * as themes from './styles/themes'
import { AppRoutes } from './routes/app.routes'
import { AppProvider, useStorageData } from './contexts'

export const AppSrc = () => {
  const { storageLoading } = useStorageData()
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  })

  if (!fontsLoaded || storageLoading) {
    return <AppLoading />
  }

  return (
    <AppProvider>
      <ThemeProvider theme={themes.light}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  )
}
