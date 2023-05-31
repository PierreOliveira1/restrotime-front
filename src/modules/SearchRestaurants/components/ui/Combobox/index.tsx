import React, { useState } from 'react';
import * as Styles from './styles';

interface Option {
	value: string;
	label: string;
}

interface ComboBoxProps {
	options: Option[];
	onChange: (value: string) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<Option | null>(null);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectOption = (option: Option) => {
		setSelectedOption(option);
		onChange(option.value);
		setIsOpen(false);
	};

	return (
		<Styles.ComboBoxContainer>
			<Styles.ComboBoxButton onClick={handleToggleMenu}>
				{selectedOption ? selectedOption.label : 'Select an option'}
			</Styles.ComboBoxButton>
			{isOpen && (
				<Styles.ComboBoxMenu>
					{options.map((option) => (
						<Styles.ComboBoxMenuItem
							key={option.value}
							onClick={() => handleSelectOption(option)}
						>
							{option.label}
						</Styles.ComboBoxMenuItem>
					))}
				</Styles.ComboBoxMenu>
			)}
		</Styles.ComboBoxContainer>
	);
};

export default ComboBox;
