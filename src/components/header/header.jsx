import './header.scss'
import logoHeader from '../../assets/images/png/logo-header.png'

export const Header = ({ children }) => {
	return (
		<div className='header'>
			<img src={logoHeader} alt='logo' />
			{children}
		</div>
	)
}
