import { Loading } from '@/components/common/Loading';
import { Suspense, lazy } from 'react';

const RestaurantComponent = lazy(() => import('@/modules/Restaurant'));

export function Restaurant() {
	return (
		<Suspense fallback={<Loading />}>
			<RestaurantComponent />
		</Suspense>
	);
}
