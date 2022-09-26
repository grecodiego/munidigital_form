import { MenuButton } from '../menuButton/menuButton'
import { useState } from 'react'
import { Menu } from '../menu/menu'
import './page.scss'
import { Header } from '../header/header'

export const Page = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	return (
		<div className='page'>
			<Header>
				<MenuButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			</Header>

			<Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			<main>{children}</main>
		</div>
	)
}
