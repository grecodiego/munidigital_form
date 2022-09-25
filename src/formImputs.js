export const formInputs = [
	{
		label: 'Nombre',
		type: 'text',
		name: 'firstName',
		placeholder: 'Ingrese su nombre',
		validateType: 'letters',
		validateQuanty: 2,
		errorMessage:
			'El nombre debe tener al menos 2 carácteres y no incluir carácteres especiales',
	},

	{
		label: 'Apellido',
		type: 'text',
		name: 'lastName',
		placeholder: 'Ingrese su apellido',
		validateType: 'letters',
		validateQuanty: 2,
		errorMessage: 'El apellido debe tener al menos 2 carácteres',
	},
	{
		label: 'Dirección',
		type: 'text',
		name: 'address',
		placeholder: 'Ingrese su dirección',
		validateType: 'letters',
		validateQuanty: 4,
		errorMessage: 'La dirección debe tener al menos 4 caracteres',
	},
	{
		label: 'Correo Electrónico',
		type: 'email',
		name: 'email',
		placeholder: 'Ingrese su correo electrónico',
		validateType: 'email',
		validateQuanty: 0,
		errorMessage: 'La casilla de correo no es válida',
	},
	{
		label: 'Teléfono',
		type: 'tel',
		name: 'phone',
		placeholder: 'Ingrese su número de telefono',
		validateType: 'numbers',
		validateQuanty: 6,
		errorMessage: 'El número de teléfono debe contener más de 6 dígitos ',
	},
]
/*
formInputs.push({
	label: 'sexo',
	type: 'text',
	name: 'sex',
	placeholder: 'Ingrese su sexo',
	errorMessage: 'value.length >= 2',
	pattern: 'john',
})
*/
function convertToObj(a) {
	let obj = {}
	a.forEach((k) => {
		obj[k.name] = ''
	})
	return obj
}

function convertToObjWithBoolean(a) {
	let obj = {}
	a.forEach((k) => {
		obj[k.name] = false
	})
	return obj
}
export const fieldsToValidate = convertToObjWithBoolean(formInputs)
export const fields = convertToObj(formInputs)
export const fieldsErrors = convertToObj(formInputs)
