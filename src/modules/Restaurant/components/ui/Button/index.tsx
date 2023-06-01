import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as Styles from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	width?: string;
	marginTop?: string;
	children: ReactNode;
};

export function Button({ children, width, marginTop, ...rest }: ButtonProps) {
	return (
		<Styles.Container width={width} marginTop={marginTop} {...rest}>
			{children}
		</Styles.Container>
	);
}
