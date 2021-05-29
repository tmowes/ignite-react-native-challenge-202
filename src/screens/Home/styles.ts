import { FlatList } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { LoginDataProps } from './types'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.primary};
    padding: 0 27px;
  `}
`

export const LoginList = styled(FlatList as new () => FlatList<LoginDataProps>).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(38)}px;
  margin-bottom: ${RFValue(22)}px;
`

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const EmptyListMessage = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(16)}px;
    font-family: ${fonts.medium};
    color: ${colors.primaryLight};
  `}
`
