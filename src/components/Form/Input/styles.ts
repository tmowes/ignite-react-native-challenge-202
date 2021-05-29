import { TextInput } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  margin-top: ${RFValue(26)}px;
`

export const Label = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${colors.primary};
    margin-bottom: 8px;
  `}
`

export const Error = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.error};
    font-family: ${fonts.regular};
    margin-bottom: ${RFValue(4)}px;
  `}
`

export const FormInput = styled(TextInput)`
  ${({ theme: { colors, fonts } }) => css`
    padding: ${RFValue(15)}px;
    border-radius: 10px;
    border: 1px solid ${colors.primaryLight};
    color: ${colors.primary};
    font-family: ${fonts.regular};
    background-color: ${colors.background};
    font-size: ${RFValue(14)}px;
  `}
`
