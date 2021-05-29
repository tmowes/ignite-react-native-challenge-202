import styled, { css } from 'styled-components/native'
import Feather from '@expo/vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.background};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: ${RFValue(90)}px;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 18px;
  `}
`

export const LoginData = styled.View``

export const Password = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(26)}px;
    font-family: ${fonts.medium};
    color: ${colors.primaryLight};
    margin: 0 auto;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    margin-bottom: ${RFValue(4)}px;
    font-family: ${fonts.medium};
    font-size: ${RFValue(12)}px;
    color: ${colors.primary};
  `}
`

export const Email = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    font-size: ${RFValue(12)}px;
    color: ${colors.primaryLight};
  `}
`

export const ShowPasswordButton = styled.TouchableOpacity``

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    color: ${colors.primary};
    font-size: ${RFValue(24)}px;
  `}
`
