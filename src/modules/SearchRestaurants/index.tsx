import toast, { Toaster } from 'react-hot-toast';
import { ApiError, fetchApi } from '@/lib/fetchApi';
import * as Styles from './styles';
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
					<div>
						<Styles.SearchInput type="text" />
						<ul>
							{restaurants.map((restaurant: Restaurant) => (
								<li key={restaurant.id}>{restaurant.name}</li>
							))}
						</ul>
					</div>
					<Styles.SearchInputDate type="datetime-local" step="1" />
					<Styles.ButtonLink>Buscar</Styles.ButtonLink>
				</Styles.SearchContent>
			</Styles.Container>
		</>
	);
}

export default Restaurants;
