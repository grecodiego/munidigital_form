import './button.scss'

export const Button = ({ disabled, children, onClick = null }) => {
	return (
		<button
			className={`button ${disabled ? 'disabled' : ''}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	)
}
