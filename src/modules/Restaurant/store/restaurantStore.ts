import { create } from 'zustand';

interface RestaurantStore {
	id: string;
	fantasyName: string;
	corporateName: string;
	cnpj: string;
	phoneNumber: string;
	email: string;
	address: Address;
	schedules: Schedule[];
}

interface Address {
	id?: string;
	street: string;
	number: string;
	complement: string;
	district: string;
	city: string;
	state: string;
	zipCode: string;
}

interface Schedule {
	id?: string;
	dayOfWeek: number;
	openingTime?: string;
	closingTime?: string;
	openingTime2?: string;
	closingTime2?: string;
}

export const useRestaurantStore = create((set) => ({
	restaurant: null as RestaurantStore | null,
	setRestaurant: (restaurant: RestaurantStore) =>
		set(() => ({
			restaurant,
		})),
}));
