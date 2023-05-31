import { Outlet } from 'react-router-dom';
import * as Styles from './styles';

export function Header() {
	return (
		<Styles.Container>
			<Styles.Header>
				<h1>RestroTime</h1>
			</Styles.Header>
			<Styles.Content>
				<Outlet />
			</Styles.Content>
		</Styles.Container>
	);
}
