import React, { useContext } from 'react'

// styles
import { SCList } from './style.js'

// Components
import { ItemList } from '../item-list/ItemList.js'

// Context
import { TaskContext } from '../../context/task-context/Context'

export const List = () => {
	const { tasks } = useContext(TaskContext)

	return (
		<SCList>
			{tasks.map((item) => {
				return (
					<ItemList key={item.id} title={item.title} status={item.status} />
				)
			})}
		</SCList>
	)
}
