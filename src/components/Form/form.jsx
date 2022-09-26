import { Fragment, useState } from 'react'
import { Input } from '../input/input'
import {
	convertToObjWithBoolean,
	convertToObj,
} from '../../utils/formFunctions'
import './form.scss'
import ReactExport from 'react-export-excel'
import { Button } from '../button/button'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

export const Form = ({
	title,
	formInputs,
	excelDownload = false,
	labelButton,
	handleClickButton,
}) => {
	const fieldsToValidate = convertToObjWithBoolean(formInputs)
	const fields = convertToObj(formInputs)

	const [data, setData] = useState({ ...fields })
	const [formValidState, setFormValidState] = useState({ ...fieldsToValidate })

	const arrayOfValidState = Object.values(formValidState)
	const enableButton = arrayOfValidState.every((v) => v === true)

	return (
		<Fragment>
			<form className='form'>
				<h1 className='title'>{title}</h1>
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
							options={formInput.options}
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
				{!excelDownload ? (
					<Button
						onClick={(e) =>
							handleClickButton({ e: e, path: '../admin-panel', data: data })
						}
						disabled={!enableButton}>
						{labelButton}
					</Button>
				) : null}
				{excelDownload ? (
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
				) : null}
			</form>
		</Fragment>
	)
}
