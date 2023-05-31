import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from '@/components/common/Header';
import { Restaurants } from './Restaurants';
import { Restaurant } from './Restaurant';
import { SearchRestaurants } from './SearchRestaurants';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: <Restaurants />,
			},
			{
				path: '/restaurante/:id',
				element: <Restaurant />,
			},
			{
				path: '/search',
				element: <SearchRestaurants />,
			},
		],
	},
]);

export function Routes() {
	return <RouterProvider router={routes} />;
}
