import { createGlobalStyle } from 'styled-components'

import { Colors } from './utils/Colors'

export const GlobalStyle = createGlobalStyle`
 body{ 
   margin: 0;
   background-color: ${Colors.mainBlue};
 }
`
