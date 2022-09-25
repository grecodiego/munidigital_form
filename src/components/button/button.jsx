import './button.scss'

export const Button = ({ disabled, children }) => {
	return (
		<button
			className={`button ${disabled ? 'disabled' : ''}`}
			disabled={disabled}>
			{children}
		</button>
	)
}
