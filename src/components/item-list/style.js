import styled from 'styled-components'
import { css } from 'styled-components'

import { Colors } from '../../utils/Colors'

export const SCTask = styled.div`
	display: flex;
	border: 1px solid ${Colors.mainYellow};
	padding: 20px;
	height: 30px;

	&:first-child {
		${({ isOneTask }) => !isOneTask && 'border-radius: 10px 10px 0 0;'}
	}

	&:last-child {
		${({ isOneTask }) => !isOneTask && 'border-radius: 0 0 10px 10px;'}
	}

	${({ isOneTask }) =>
		isOneTask &&
		css`
			border-radius: 10px;
		`}
`
