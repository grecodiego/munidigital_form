import { Form } from '../../components/form/form'
import { Page } from '../../components/page/page'
import { formInputs } from '../../formImputs'

export const Home = () => {
	console.log(formInputs)
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
