import { formInputs } from '../../formImputs'
import './inputList.scss'

export const InputList = () => {
	return (
		<div className='inputList'>
			<header className=''>
				<h2 className='font-semibold text-gray-800'>Input List</h2>
			</header>
			<div className=''>
				{/* Table */}
				<div className=''>
					<table className=''>
						{/* Table header */}
						<thead className=''>
							<tr>
								<th className=''>
									<div className=''>Name</div>
								</th>
								<th className='p-2 whitespace-nowrap'>
									<div className=''>Label</div>
								</th>
								<th className='p-2 whitespace-nowrap'>
									<div className=''>Placeholder</div>
								</th>
								<th className='p-2 whitespace-nowrap'>
									<div className=''>Type</div>
								</th>
								<th className='p-2 whitespace-nowrap'>
									<div className=''>Validation Type</div>
								</th>
								<th className='p-2 whitespace-nowrap'>
									<div className=''>Min Characters</div>
								</th>
								<th className='p-2 whitespace-nowrap'>
									<div className=''>Error Message</div>
								</th>
							</tr>
						</thead>
						{/* Table body */}
						<tbody className='text-sm divide-y divide-gray-100'>
							{formInputs.map((formInput) => {
								return (
									<tr key={formInput.name}>
										<td className='p-2'>
											<div className='text-left'>
												<div className='flex items-center'>
													<div className='font-semibold text-black underline'>
														{formInput.name}
													</div>
												</div>
											</div>
										</td>
										<td className='p-2 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='font-semibold text-black underline'>
													{formInput.label}
												</div>
											</div>
										</td>
										<td className='p-2 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='font-semibold text-black underline'>
													{formInput.placeholder}
												</div>
											</div>
										</td>
										<td className='p-2 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='font-semibold text-black underline'>
													{formInput.type}
												</div>
											</div>
										</td>
										<td className='p-2 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='font-semibold text-black underline'>
													{formInput.validateType}
												</div>
											</div>
										</td>
										<td className='p-2 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='font-semibold text-black underline'>
													{formInput.validateQuanty}
												</div>
											</div>
										</td>
										<td className='p-2 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='font-semibold text-black underline'>
													{formInput.errorMessage}
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
		</div>
	)
}
