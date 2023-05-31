import { Loading } from '@/components/common/Loading';
import { Suspense, lazy } from 'react';

const SearchRestaurantsComponent = lazy(
	() => import('@/modules/SearchRestaurants'),
);

export function SearchRestaurants() {
	return (
		<Suspense fallback={<Loading />}>
			<SearchRestaurantsComponent />
		</Suspense>
	);
}
