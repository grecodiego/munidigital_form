import './optionContainer.scss'

export const OptionContainer = ({
	handleClickOption,
	option,
	optionChoosen,
}) => {
	return (
		<div
			className={`optionContainer ${
				optionChoosen === option.path ? 'optionContainerChoosen' : ''
			}`}
			option={option}>
			<div
				className={`option ${
					optionChoosen === option.path ? 'optionChoosen' : ''
				}`}
				onClick={() => handleClickOption(option)}
				option={option}>
				{option.title}
			</div>
		</div>
	)
}
