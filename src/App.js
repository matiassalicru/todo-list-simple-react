import React from 'react'
import { Input } from './components/input/Input'
import { List } from './components/list-container/List'
import { Header } from './header/Header'

import { GlobalStyle } from './style'

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
      <Input />
			<List />
		</>
	)
}
