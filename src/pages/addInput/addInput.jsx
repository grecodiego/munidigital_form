import { Page } from '../../components/page/page'
import { Form } from '../../components/form/form'
import { addInputs } from './addInputs'
import { formInputs } from '../../formImputs'
import { useNavigate } from 'react-router-dom'

export const AddInput = () => {
	const navigate = useNavigate()

	const handleClickButton = ({ e, path, data }) => {
		e.preventDefault()
		formInputs.push({
			...data,
		})
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
