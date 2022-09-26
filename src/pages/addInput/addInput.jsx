import { Page } from '../../components/page/page'
import { Form } from '../../components/form/form'
import { addInputs } from './addInputs'
import { DefaultFormInputs } from '../../formImputs'
import { useNavigate } from 'react-router-dom'

export const AddInput = () => {
	const navigate = useNavigate()

	const formInputs =
		JSON.parse(localStorage.getItem('formInputs')) || DefaultFormInputs

	const handleClickButton = async ({ e, path, data }) => {
		e.preventDefault()
		formInputs.push({
			...data,
		})

		try {
			await localStorage.setItem('formInputs', JSON.stringify(formInputs))
			navigate('/admin-panel')
		} catch (err) {
			alert(err)
		}
		navigate(path)
	}
	return (
		<Page>
			<Form
				title={'AGREGAR INPUT'}
				formInputs={addInputs}
				labelButton={'AGREGAR INPUT'}
				handleClickButton={handleClickButton}
			/>
		</Page>
	)
}
