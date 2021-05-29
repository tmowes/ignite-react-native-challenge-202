import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.primary};
  `}
`

export const HeaderTitle = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.background};
    font-size: ${RFValue(18)}px;
    font-family: ${fonts.medium};
    margin: ${RFValue(64)}px auto ${RFValue(41)}px auto;
  `}
`

export const Form = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.background};
    padding: 0 ${RFValue(27)}px;
    padding-top: ${RFValue(26)}px;
    border-top-left-radius: ${RFValue(50)}px;
    border-top-right-radius: ${RFValue(50)}px;
  `}
`
