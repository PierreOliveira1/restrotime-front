import { InputHTMLAttributes, forwardRef } from 'react';
import * as Styles from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const InputForm = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { label, ...rest } = props;

	return (
		<Styles.Container>
			{label && <Styles.Label>{label}</Styles.Label>}
			<Styles.InputForm ref={ref} {...rest} />
		</Styles.Container>
	);
});

InputForm.displayName = 'InputForm';
