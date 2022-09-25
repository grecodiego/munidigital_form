export function validateField({
	formValidState,
	name,
	setFormValidState,
	setInputValidState,
	validateQuanty = 99999,
	validateType,
	value,
}) {
	function checkCondition(condition, name) {
		if (condition) {
			setInputValidState(true)
			setFormValidState({ ...formValidState, [name]: true })
		} else {
			setInputValidState(false)
			setFormValidState({ ...formValidState, [name]: false })
		}
	}

	switch (validateType) {
		case 'letters':
			checkCondition(
				value.length >= validateQuanty && /^[a-zA-Z]+$/.test(value),
				validateType,
				name
			)
			break
		case 'address':
			checkCondition(
				value.length >= validateQuanty && /^[0-9a-zA-Z]+$/.test(value),
				validateType,
				name
			)
			break
		case 'email':
			checkCondition(
				value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
				validateType,
				name
			)
			break
		case 'numbers':
			checkCondition(
				value.length >= validateQuanty && /^[0-9]+$/.test(value),
				validateType,
				name
			)
			break
		case 'any':
			setInputValidState(true)
			setFormValidState({ ...formValidState, [name]: true })
			break
		default:
			break
	}
}
