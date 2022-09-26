import { Form } from '../../components/form/form'
import { Page } from '../../components/page/page'
import { DefaultFormInputs } from '../../formImputs'

export const Home = () => {
	const formInputs =
		JSON.parse(localStorage.getItem('formInputs')) || DefaultFormInputs
	return (
		<Page>
			<Form
				title={'MuniDigital form Challenge!'}
				formInputs={formInputs}
				excelDownload={true}
			/>
		</Page>
	)
}
