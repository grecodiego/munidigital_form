import { Fragment } from 'react'
import { MenuButton } from '../menuButton/menuButton'
import { useState } from 'react'
import { Menu } from '../menu/menu'
import './page.scss'

export const Page = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	return (
		<div className='page'>
			<Fragment>
				<MenuButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
				<Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
				<main>{children}</main>
			</Fragment>
		</div>
	)
}
