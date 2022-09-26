import { DefaultFormInputs } from '../../formImputs'
import './inputList.scss'
import { useNavigate } from 'react-router-dom'

export const InputList = () => {
	const navigate = useNavigate()
	const formInputs =
		JSON.parse(localStorage.getItem('formInputs')) || DefaultFormInputs

	const handleDelClick = async (formInput) => {
		const index = formInputs.indexOf(formInput)
		formInputs.splice(index, 1)
		try {
			console.log(JSON.stringify(formInputs))
			await localStorage.setItem('formInputs', JSON.stringify(formInputs))
			navigate('/admin-panel')
		} catch (err) {
			alert(err)
		}
	}

	return (
		<div className='inputList'>
			<header className='headerList'>
				<h2 className='font-semibold text-gray-800'>Input List</h2>
			</header>
			{/* Table */}
			<div className='table'>
				<table className=''>
					{/* Table header */}
					<thead>
						<tr>
							<th>
								<div className=''>Name</div>
							</th>
							<th className=''>
								<div className=''>Label</div>
							</th>
							<th className=''>
								<div className=''>Placeholder</div>
							</th>
							<th className=''>
								<div className=''>Type</div>
							</th>
							<th className=''>
								<div className=''>Validation Type</div>
							</th>
							<th className=''>
								<div className=''>Min. Chars.</div>
							</th>
							<th className=''>
								<div className=''>Error Message</div>
							</th>
							<th className=''>
								<div className=''>Delete Input</div>
							</th>
						</tr>
					</thead>
					{/* Table body */}
					<tbody className=''>
						{formInputs.map((formInput, i) => {
							return (
								<tr key={formInput.name}>
									<td className=''>
										<div className=''>
											<div className=''>
												<div className=''>{formInput.name}</div>
											</div>
										</div>
									</td>
									<td className=''>
										<div className=''>
											<div className=''>{formInput.label}</div>
										</div>
									</td>
									<td className=''>
										<div className=''>
											<div className=''>{formInput.placeholder}</div>
										</div>
									</td>
									<td className=''>
										<div className=''>
											<div className=''>{formInput.type}</div>
										</div>
									</td>
									<td className=''>
										<div className=''>
											<div className=''>{formInput.validateType}</div>
										</div>
									</td>
									<td className=''>
										<div className=''>
											<div className=''>{formInput.validateQuanty}</div>
										</div>
									</td>
									<td className=''>
										<div className=''>
											<div className=''>{formInput.errorMessage}</div>
										</div>
									</td>
									<td className=''>
										<div className=''>
											<div className=''>
												<button onClick={() => handleDelClick(formInput)}>
													Delete
												</button>
											</div>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
