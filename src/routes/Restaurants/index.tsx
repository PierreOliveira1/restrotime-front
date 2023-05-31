import { Loading } from '@/components/common/Loading';
import { Suspense, lazy } from 'react';

const RestaurantsComponent = lazy(() => import('@/modules/Restaurants'));

export function Restaurants() {
	return (
		<Suspense fallback={<Loading />}>
			<RestaurantsComponent />
		</Suspense>
	);
}
