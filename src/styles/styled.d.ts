import 'styled-components'

import { light as lightTheme } from './themes'
import { dark as darkTheme } from './themes'

export type Theme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
