import { useState } from 'react'
import { Input } from '../Input/Input'
import { formInputs, fields } from '../../formImputs'
/*import ReactExport from 'react-export-excel'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn
*/
export const Form = () => {
	const [data, setData] = useState({ ...fields })
	console.log(data)
	return (
		<div>
			<h1>React form</h1>
			{formInputs.map((formInput) => {
				return (
					<Input
						data={data}
						key={formInput.name}
						label={formInput.label}
						type={formInput.type}
						name={formInput.name}
						value={data[formInput.name]}
						setData={setData}
						placeholder={formInput.placeholder}
					/>
				)
			})}
			{/*			<ExcelFile element={<button>Download Data</button>}>
				<ExcelSheet data={data} name='Ciudadano'>
	
					<ExcelColumn label={formInputs.label} value={formInputs.name} />

				</ExcelSheet>
			</ExcelFile>*/}
		</div>
	)
}
