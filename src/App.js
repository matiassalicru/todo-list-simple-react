import React from 'react'

// Components
import { Input } from './components/input/Input'
import { List } from './components/list-container/List'
import { Header } from './header/Header'

// Styles
import { GlobalStyle } from './style'

// Context
import { TaskProvider } from './context/task-context/Context'
export const App = () => {
	return (
		<TaskProvider>
			<GlobalStyle />
			<Header />
			<Input />
			<List />
		</TaskProvider>
	)
}
