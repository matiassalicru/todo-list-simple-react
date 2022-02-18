import React, { useState } from 'react'

// styles
import { SCInput, SCInputWrapper, SCForm } from './style.js'

const INITIAL_TASK_TITLE = ''

export const Input = () => {
	const [taskTitle, setTaskTitle] = useState(INITIAL_TASK_TITLE)

	const handleChange = ({ target: { value } }) => {
		setTaskTitle(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submitiaste biennn', taskTitle)
		setTaskTitle(INITIAL_TASK_TITLE)
	}

	return (
		<SCInputWrapper>
			<SCForm onSubmit={handleSubmit}>
				<SCInput
					placeholder='Write your text here...'
					type='text'
					value={taskTitle}
					onChange={handleChange}
					onSubmit={() => handleSubmit}
				/>
			</SCForm>
		</SCInputWrapper>
	)
}
