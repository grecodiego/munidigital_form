import './menuButton.scss'

export const MenuButton = ({ menuIsOpen, setMenuIsOpen }) => {
	return (
		<div className={`styledMenu`} onClick={() => setMenuIsOpen(!menuIsOpen)}>
			<div
				className={`defaultLine ${
					menuIsOpen ? 'openTopLine' : ' closeTopLine'
				}`}></div>
			<div
				className={`defaultLine ${
					menuIsOpen ? 'openMidLine' : ' closeMidLine'
				}`}></div>
			<div
				className={`defaultLine ${
					menuIsOpen ? 'openBottomLine' : ' closeBottomLine'
				}`}></div>
		</div>
	)
}
