import { Fragment, useState } from 'react'
import './input.scss'
import { validateField } from '../../utils/validate'

export const Input = ({
	data,
	setData,
	formValidState,
	setFormValidState,
	errorMessage,
	label,
	type,
	name,
	value,
	placeholder,
	required,
}) => {
	const [valid, setValid] = useState(false)
	let alreadyWrite = false
	const handleOnchange = (value, name) => {
		validateField(name, value, setValid, formValidState, setFormValidState)
		setData({ ...data, [name]: value })
	}

	if (value.length > 0) {
		alreadyWrite = true
	}
	return (
		<Fragment>
			<div className='inputAndLevelContainer'>
				<label className='label'>{label}</label>
				<div className='inputContainer'>
					<input
						className='input'
						id={name}
						name={name}
						onChange={(e) => handleOnchange(e.target.value, name)}
						placeholder={placeholder}
						type={type}
						value={value}
						required={required}
					/>
					{alreadyWrite
						? !valid && <span className='errorSpan'>{errorMessage}</span>
						: null}
				</div>
			</div>
		</Fragment>
	)
}
