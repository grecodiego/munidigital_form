export const formInputs = [
	{
		label: 'Nombre',
		type: 'text',
		name: 'firstName',
		placeholder: 'Ingrese su nombre',
		errorMessage:
			'El nombre debe tener al menos 2 carácteres y no incluir carácteres especiales',
		condition: 'value.length > 1 && value.match(letters)',
	},

	{
		label: 'Apellido',
		type: 'text',
		name: 'lastName',
		placeholder: 'Ingrese su apellido',
		errorMessage: 'El apellido debe tener al menos 2 carácteres',
		condition: 'value.length > 1 && value.match(letters)',
	},
	{
		label: 'Dirección',
		type: 'text',
		name: 'address',
		placeholder: 'Ingrese su dirección',
		errorMessage: 'La dirección debe tener al menos 4 caracteres',
		condition: 'value.length > 1 && value.match(letters)',
	},
	{
		label: 'Correo Electrónico',
		type: 'email',
		name: 'email',
		placeholder: 'Ingrese su correo electrónico',
		errorMessage: 'La casilla no es válida',
		condition: 'value.length > 1 && value.match(letters)',
	},
	{
		label: 'Teléfono',
		type: 'tel',
		name: 'phone',
		placeholder: 'Ingrese su número de telefono',
		errorMessage: 'La casilla no es válida',
		condition: 'value.length > 1 && value.match(letters)',
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
