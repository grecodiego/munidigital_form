import { menuOptions } from './menuOptions'
import { OptionContainer } from './components/optionContainer/optionContainer'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './menu.scss'

export const Menu = ({ menuIsOpen, setMenuIsOpen }) => {
	const location = useLocation()
	const navigate = useNavigate()
	const [optionChoosen, setOptionChoosen] = useState('/')

	useEffect(() => {
		setOptionChoosen(location.pathname)
	}, [location])

	function handleClickOption(option) {
		setMenuIsOpen(false)
		navigate(option.path)
	}

	return (
		<div className={`menu ${menuIsOpen ? 'open' : 'close'}`}>
			{menuOptions.map((option) => {
				return (
					<OptionContainer
						handleClickOption={handleClickOption}
						key={option.id}
						option={option}
						optionChoosen={optionChoosen}
					/>
				)
			})}
		</div>
	)
}
