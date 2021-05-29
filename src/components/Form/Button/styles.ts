import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary};
    padding: 15px 0;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  `}
`
export const ButtonText = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${fonts.medium};
    color: ${colors.primary};
  `}
`
