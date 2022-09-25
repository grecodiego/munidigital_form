import { Fragment, useState } from 'react'
import './input.scss'
import { validateField } from '../../utils/validate'

export const Input = ({
	data,
	errorMessage,
	formValidState,
	label,
	name,
	placeholder,
	required,
	setData,
	setFormValidState,
	type,
	validateQuanty,
	validateType,
	value,
}) => {
	const [valid, setValid] = useState(false)
	let alreadyWrite = false

	const handleOnchange = (value, name) => {
		validateField({
			formValidState: formValidState,
			name: name,
			setFormValidState: setFormValidState,
			setInputValidState: setValid,
			validateQuanty: validateQuanty,
			validateType: validateType,
			value: value,
		})
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
