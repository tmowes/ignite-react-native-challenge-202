import React from 'react'
import { Platform } from 'react-native'

import FeatherIcon from '@expo/vector-icons/Feather'
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { Home } from '../screens/Home'
import { RegisterLoginData } from '../screens/RegisterLoginData'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const { colors, fonts } = useTheme()

  const tabBarOptions: BottomTabBarOptions = {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.primaryLight,
    labelPosition: 'beside-icon',
    labelStyle: {
      fontFamily: fonts.medium,
      fontSize: RFValue(14),
      marginLeft: RFValue(14),
    },
    style: {
      paddingVertical: Platform.select({ ios: 20, android: 0 }),
    },
  }

  const homeOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Senhas',
    tabBarIcon: ({ color }) => <FeatherIcon name="key" color={color} size={24} />,
  }

  const registerOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Cadastrar',
    tabBarIcon: ({ color }) => <FeatherIcon name="edit" color={color} size={24} />,
  }

  return (
    <Navigator tabBarOptions={tabBarOptions}>
      <Screen name="Home" options={homeOptions} component={Home} />
      <Screen
        name="RegisterLoginData"
        options={registerOptions}
        component={RegisterLoginData}
      />
    </Navigator>
  )
}
