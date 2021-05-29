import React from 'react'
import { TextInputProps } from 'react-native'

import { useTheme } from 'styled-components'

import { Container, Input, Icon } from './styles'

export function SearchBar(props: TextInputProps) {
  const { colors } = useTheme()

  return (
    <Container>
      <Input {...props} placeholderTextColor={colors.primaryLight} />
      <Icon name="search" />
    </Container>
  )
}
