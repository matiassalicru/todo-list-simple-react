import styled from 'styled-components'
import { STATUS } from './utils/constants'

export const SCStatus = styled.div`
	width: 15px;
	height: 65px;
	margin-right: 5px;
	padding: 0;
	background-color: ${({ status }) => STATUS[status].color};
	cursor: pointer;
`
