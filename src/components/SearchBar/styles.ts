import { TextInput } from 'react-native'

import styled, { css } from 'styled-components/native'
import Feather from '@expo/vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    background-color: ${colors.background};
    padding: 12px 16px;
    margin-top: ${RFValue(54)}px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Input = styled(TextInput)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(12)}px;
    color: ${colors.primary};
  `}
`

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.primaryLight};
  `}
`
