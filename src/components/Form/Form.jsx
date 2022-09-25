import { Fragment, useState } from 'react'
import { Input } from '../input/input'
import { formInputs, fields, fieldsToValidate } from '../../formImputs'
import './form.scss'
import ReactExport from 'react-export-excel'
import { Button } from '../button/button'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

export const Form = () => {
	const [data, setData] = useState({ ...fields })
	const [formValidState, setFormValidState] = useState({ ...fieldsToValidate })

	const arrayOfValidState = Object.values(formValidState)
	const enableButton = arrayOfValidState.every((v) => v === true)
	console.log(arrayOfValidState, 'arrayOfValidState')
	console.log(enableButton, 'enableButton22')
	return (
		<Fragment>
			<form className='form'>
				<h1 className='title'>MuniDigital form Challenge!</h1>
				{formInputs.map((formInput) => {
					return (
						<Input
							key={formInput.name}
							data={data}
							setData={setData}
							formValidState={formValidState}
							setFormValidState={setFormValidState}
							label={formInput.label}
							type={formInput.type}
							name={formInput.name}
							value={data[formInput.name]}
							placeholder={formInput.placeholder}
							required={formInput.required}
							errorMessage={formInput.errorMessage}
							pattern={formInput.pattern}
							validateType={formInput.validateType}
							validateQuanty={formInput.validateQuanty}
						/>
					)
				})}
				<ExcelFile
					element={<Button disabled={!enableButton}>Download Data</Button>}
					filename='personData'>
					<ExcelSheet data={[data]} name='personData'>
						{formInputs.map((field) => {
							return (
								<ExcelColumn
									key={field.name}
									label={field.name}
									value={field.name}
								/>
							)
						})}
					</ExcelSheet>
				</ExcelFile>
			</form>
		</Fragment>
	)
}
