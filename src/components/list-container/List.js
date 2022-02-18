import React, { useState } from 'react'

// styles
import { SCList } from './style.js'

// Components
import { ItemList } from '../item-list/ItemList.js'

export const List = () => {
	const [items, setItems] = useState([1, 2, 3, 4, 5])

	return (
		<SCList>
			{items.map((item) => (
				<ItemList key={item}>{item}</ItemList>
			))}
		</SCList>
	)
}
