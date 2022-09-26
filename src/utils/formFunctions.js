export const convertToObj = (a) => {
	let obj = {}
	a.forEach((k) => {
		obj[k.name] = ''
	})
	return obj
}

export const convertToObjWithBoolean = (a) => {
	let obj = {}
	a.forEach((k) => {
		obj[k.name] = false
	})
	return obj
}
