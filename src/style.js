import { createGlobalStyle } from 'styled-components'

import { Colors } from './utils/Colors'

export const GlobalStyle = createGlobalStyle`
 body{ 
   margin: 0;
   background-color: ${Colors.mainBlue};
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
`
