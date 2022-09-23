export function validateField(
	fieldName,
	value,
	setInputValidState,
	formValidState,
	setFormValidState
) {
	function checkCondition(condition, fieldName) {
		if (condition) {
			setInputValidState(true)
			setFormValidState({ ...formValidState, [fieldName]: true })
		} else {
			setInputValidState(false)
			setFormValidState({ ...formValidState, [fieldName]: false })
		}
	}
	switch (fieldName) {
		case 'firstName':
			checkCondition(value.length > 1 && /^[a-zA-Z]+$/.test(value), fieldName)
			break
		case 'lastName':
			checkCondition(value.length > 1 && /^[a-zA-Z]+$/.test(value), fieldName)
			break
		case 'address':
			checkCondition(
				value.length > 3 && /^[0-9a-zA-Z]+$/.test(value),
				fieldName
			)
			break
		case 'email':
			checkCondition(
				value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
				fieldName
			)
			break
		case 'phone':
			checkCondition(value.length > 6 && /^[0-9]+$/.test(value), fieldName)
			break
		default:
			break
	}
}
