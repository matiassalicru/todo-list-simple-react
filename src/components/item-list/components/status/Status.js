import React, { useContext, useState } from 'react'

// Context
import { TaskContext } from '../../../../context/task-context/Context'

// styles
import { SCStatus } from './style.js'

const updateStatus = {
	new: 'in_progress',
	in_progress: 'finished',
	finished: 'new',
}

export const Status = ({ taskId, status, isOneTask }) => {
	const { tasks } = useContext(TaskContext)
	const [taskStatus, setTaskStatus] = useState(status)

	const handleChangeStatus = () => {
		const task = tasks.find((task) => task.id === taskId)
		const taskIndex = tasks.findIndex((item) => item.id === task.id)

		task.status = updateStatus[taskStatus]

		setTaskStatus(task.status)
		tasks[taskIndex] = task
	}

	return (
		<SCStatus
			status={taskStatus}
			onClick={handleChangeStatus}
			isOneTask={isOneTask}
		/>
	)
}
