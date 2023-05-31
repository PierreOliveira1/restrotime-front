import { UseFormRegisterReturn } from 'react-hook-form';
import * as Styles from './styles';

interface Props {
	label?: string;
	placeholder?: string;
	register: UseFormRegisterReturn;
}

export function InputForm(props: Props) {
	const { label, placeholder, register } = props;

	return (
		<Styles.Container>
			{label && <Styles.Label>{label}</Styles.Label>}
			<Styles.InputForm placeholder={placeholder ?? ''} {...register} />
		</Styles.Container>
	);
}
