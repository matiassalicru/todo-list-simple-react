import React, { useContext } from 'react'

// Components
import { Status } from './components/status'
import { Title } from './components/title'

// Context
import { TaskContext } from '../../context/task-context/Context'

// styles
import { SCTask } from './style.js'

export const ItemList = ({ title, status }) => {
	const { tasks } = useContext(TaskContext)

	return (
		<SCTask isOneTask={tasks?.length === 1}>
			<Status status={status} />
			<Title title={title} />
		</SCTask>
	)
}
