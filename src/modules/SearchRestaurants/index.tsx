import React, { useState, useEffect, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as Styles from './styles';

interface Restaurant {
	id: number;
	name: string;
}

const restaurantsArray: Restaurant[] = [
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
	{
		id: 6,
		name: 'Pierre Sarvatore',
	},
	{
		id: 7,
		name: 'Matheus O Brabissimo',
	},
];

const Restaurants: React.FC = () => {
	const [onFocus, setOnFocus] = useState(false);
	const [restaurants, setRestaurants] =
		useState<Restaurant[]>(restaurantsArray);
	const [restaurantsFiltered, setRestaurantsFiltered] = useState<Restaurant[]>(
		[],
	);

	const handleMouseEnterInput = () => {
		setOnFocus(true);
	};

	const handleMouseLeaveInput = () => {
		setOnFocus(false);
	};

	const handleFilter = (value: string) => {
		const filtered = restaurants.filter((restaurant) =>
			restaurant.name.toLowerCase().includes(value.toLowerCase()),
		);
		setRestaurantsFiltered(filtered);
	};

	useEffect(() => {
		setRestaurants(restaurantsArray);
		setRestaurantsFiltered(restaurantsArray);
	}, []);

	return (
		<>
			<Toaster />
			<Styles.Container>
				<Styles.TitleContent>
					<Styles.Title>Busque seu restaurante</Styles.Title>
				</Styles.TitleContent>

				<Styles.SearchContent>
					<Styles.ContainerInput focus={onFocus}>
						<Styles.SearchInput
							type="text"
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleFilter(e.target.value)
							}
							onMouseEnter={handleMouseEnterInput}
							onMouseLeave={handleMouseLeaveInput}
						/>
						<ul>
							{restaurantsFiltered.map((restaurant) => (
								<li key={restaurant.id}>{restaurant.name}</li>
							))}
						</ul>
					</Styles.ContainerInput>
					<Styles.SearchInputDate type="datetime-local" step="1" />
					<Styles.ButtonLink>Buscar</Styles.ButtonLink>
				</Styles.SearchContent>
			</Styles.Container>
		</>
	);
};

export default Restaurants;
