import { useState } from 'react';
import { useQuery } from 'react-query';
import toast, { Toaster } from 'react-hot-toast';
import { ApiError, fetchApi } from '@/lib/fetchApi';
import { CardRestaurant } from './components/common/CardRestaurant';
import * as Styles from './styles';
import { Data } from './dto/data';
import { Restaurant } from './dto/restaurant';
import { Pagination } from './components/common/Pagination';
import { Loading } from '@/components/common/Loading';

function Restaurants() {
	const [page, setPage] = useState(1);
	const restaurants = useQuery<Data<Restaurant>, ApiError>(
		['restaurants', { page }],
		async () => {
			const response = await fetchApi(`/restaurants?page=${page}&limit=15`);
			const data = await response.json();
			return data;
		},
		{
			onError: (error) => {
				if (error instanceof ApiError) {
					if (error.errors.issues) {
						return error.errors.issues.forEach((issue) => {
							toast.error(issue.message);
						});
					}

					if (error.errors.message) {
						return toast.error(error.errors.message);
					}

					return toast.error('Erro ao carregar os restaurantes');
				}
			},
		},
	);

	return (
		<>
			<Toaster />
			<Styles.Container>
				<Styles.TitleContent>
					<Styles.Title>Restaurantes</Styles.Title>
					<Styles.ButtonLink to="/restaurante/novo">
						Adicionar restaurante
					</Styles.ButtonLink>
				</Styles.TitleContent>
				{restaurants.isLoading && <Loading />}
				{restaurants.isSuccess && restaurants.data.data.length === 0 && (
					<Styles.ContentMessage>
						<h3>Nenhum restaurante cadastrado</h3>
					</Styles.ContentMessage>
				)}
				{restaurants.isSuccess && restaurants.data.data.length && (
					<>
						<Styles.ContainerCards>
							{restaurants.data.data.map((restaurant) => (
								<CardRestaurant key={restaurant.id} restaurant={restaurant} />
							))}
						</Styles.ContainerCards>
						<Pagination
							page={page}
							setPage={setPage}
							totalPages={restaurants.data.pagination.totalPages}
						/>
					</>
				)}
			</Styles.Container>
		</>
	);
}

export default Restaurants;
