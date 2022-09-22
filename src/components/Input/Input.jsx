export const Input = ({
	data,
	setData,
	label,
	type,
	name,
	value,
	placeholder,
}) => {
	const handleOnchange = (value) => {
		console.log('value', value)
		let newValue = { [name]: value }
		console.log('newValue', newValue)
		let newData = { ...data, ...newValue }
		console.log('newData', newData)
		setData(newData)
	}
	return (
		<div>
			<label>{label}</label>
			<input
				type={type}
				name={name}
				id={name}
				className='input'
				value={value}
				onChange={(e) => handleOnchange(e.target.value)}
				placeholder={placeholder}
			/>
		</div>
	)
}
