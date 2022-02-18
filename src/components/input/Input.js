import React, { useState, useContext } from 'react'

// utils
import { v4 as uuidv4 } from 'uuid'

// Context
import { TaskContext } from '../../context/task-context/Context.js'

// styles
import { SCInput, SCInputWrapper, SCForm } from './style.js'

const INITIAL_TASK_TITLE = ''

export const Input = () => {
	const [taskTitle, setTaskTitle] = useState(INITIAL_TASK_TITLE)
	const { tasks, setTasks } = useContext(TaskContext)

	const handleChange = ({ target: { value } }) => {
		setTaskTitle(value)
	}

	const createTask = () => {
		if (!taskTitle) return

		const task = {
			id: uuidv4(),
			title: taskTitle,
			status: 'new',
		}

		return task
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const task = createTask()

		if (task) setTasks([...tasks, task])
		setTaskTitle(INITIAL_TASK_TITLE)
	}

	return (
		<SCInputWrapper>
			<SCForm onSubmit={handleSubmit}>
				<SCInput
					placeholder='What do you need to do?'
					type='text'
					value={taskTitle}
					onChange={handleChange}
					onSubmit={() => handleSubmit}
				/>
			</SCForm>
		</SCInputWrapper>
	)
}
