import styled from 'styled-components'
import { Colors } from '../utils/Colors'

export const SCHeader = styled.h1`
	color: ${Colors.mainYellow};
	font-style: italic;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const SCHeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
