import React, { useContext } from 'react'

// Components
import { Status } from './components/status'
import { Title } from './components/title'

// Context
import { TaskContext } from '../../context/task-context/Context'

// styles
import { SCTask } from './style.js'

export const ItemList = ({ taskId, title, status }) => {
	const { tasks } = useContext(TaskContext)
	const isOneTask = tasks?.length === 1

	return (
		<SCTask isOneTask={isOneTask}>
			<Status status={status} taskId={taskId} isOneTask={isOneTask}/>
			<Title title={title} taskId={taskId} />
		</SCTask>
	)
}
