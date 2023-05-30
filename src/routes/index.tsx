import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from '@/components/common/Header';
import { Restaurants } from './Restaurants';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: <Restaurants />,
			},
		],
	},
]);

export function Routes() {
	return <RouterProvider router={routes} />;
}
