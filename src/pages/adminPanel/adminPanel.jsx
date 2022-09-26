import { Page } from '../../components/page/page'
import { InputList } from '../../components/inputList/inputList'
import { Button } from '../../components/button/button'
import { useNavigate } from 'react-router-dom'

export const AdminPanel = () => {
	const navigate = useNavigate()
	return (
		<Page>
			<InputList />
			<Button onClick={() => navigate('../add-input')}>AGREGAR INPUT</Button>
		</Page>
	)
}
