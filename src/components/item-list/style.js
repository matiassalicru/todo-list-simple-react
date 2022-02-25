import styled from 'styled-components'
import { css } from 'styled-components'

import { Colors } from '../../utils/Colors'

export const SCTask = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid ${Colors.grey};
	height: 65px;
	justify-content: space-between;
	padding: 0 20px 0 0;

	&:first-child {
		${({ isOneTask }) => !isOneTask && 'border-radius: 0 5px 0 0;'}
	}

	&:last-child {
		${({ isOneTask }) => !isOneTask && 'border-radius: 0 0 5px 0;'}
	}

	${({ isOneTask }) =>
		isOneTask &&
		css`
			border-radius: 0 5px 5px 0;
		`}
`

export const SCButton = styled.button`
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;

	&:active {
		font-size: 22px;
	}
`
