export function validateField({
	formValidState,
	name,
	setFormValidState,
	setInputValidState,
	validateQuanty = 99999,
	validateType,
	value,
}) {
	function checkCondition({ condition, name }) {
		console.log('hola')
		console.log('name', name)
		if (condition) {
			console.log('true')
			setInputValidState(true)
			setFormValidState({ ...formValidState, [name]: true })
		} else {
			console.log('false')
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
		case 'address':
			checkCondition({
				condition:
					value.length >= validateQuanty && /^[0-9a-zA-Z]+$/.test(value),
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
			setInputValidState(true)
			setFormValidState({ ...formValidState, [name]: true })
			break
		default:
			break
	}
}
