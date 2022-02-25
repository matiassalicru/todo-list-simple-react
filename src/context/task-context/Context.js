import React, { createContext, useState } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([])

	const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId))

	return (
		<TaskContext.Provider
			value={{
				tasks,
				setTasks,
				deleteTask,
			}}>
			{children}
		</TaskContext.Provider>
	)
}
