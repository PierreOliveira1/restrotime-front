import toast, { Toaster } from 'react-hot-toast';
import { ApiError, fetchApi } from '@/lib/fetchApi';
import * as Styles from './styles';
import ComboBox from './components/ui/Combobox';
interface Restaurant {
	id: number;
	name: string;
}
function Restaurants() {
	const restaurants = [
		{
			id: 1,
			name: 'Burger King',
		},
		{
			id: 2,
			name: 'McDonalds',
		},
		{
			id: 3,
			name: 'Burger King',
		},
		{
			id: 4,
			name: 'McDonalds',
		},
		{
			id: 5,
			name: 'Burger King',
		},
	];

	return (
		<>
			<Toaster />
			<Styles.Container>
				<Styles.TitleContent>
					<Styles.Title>Busque seu restaurante</Styles.Title>
				</Styles.TitleContent>

				<Styles.SearchContent>
					<ComboBox
						options={[{ label: '', value: '' }]}
						onChange={(e) => {
							console.log(e);
						}}
					/>
					<Styles.SearchInputDate type="datetime-local" step="1" />
					<Styles.ButtonLink>Buscar</Styles.ButtonLink>
				</Styles.SearchContent>
			</Styles.Container>
		</>
	);
}

export default Restaurants;
