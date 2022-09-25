import './button.scss'

export const Button = ({ disabled, children }) => {
	console.log(disabled, 'disabled')
	return (
		<button
			className={`button ${disabled ? 'disabled' : ''}`}
			disabled={disabled}>
			{children}
		</button>
	)
}
