import { InputHTMLAttributes } from 'react';
import * as Styles from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export function InputForm(props: Props) {
	const { label, ...rest } = props;

	return (
		<Styles.Container>
			{label && <Styles.Label>{label}</Styles.Label>}
			<Styles.InputForm {...rest} />
		</Styles.Container>
	);
}
