export function validateField({
	formValidState,
	name,
	setFormValidState,
	setInputValidState,
	validateQuanty = 99999,
	validateType,
	value,
}) {
	function checkCondition({ condition = true, name }) {
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
			checkCondition({
				condition: value.length >= validateQuanty && /^[a-zA-Z]+$/.test(value),
				name: name,
			})
			break
		case 'email':
			checkCondition({
				condition: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
				name: name,
			})
			break
		case 'numbers':
			checkCondition({
				condition: value.length >= validateQuanty && /^[0-9]+$/.test(value),
				name: name,
			})
			break
		case 'any':
			checkCondition({
				condition: value.length >= validateQuanty,
				name: name,
			})
			break
		default:
			break
	}
}
