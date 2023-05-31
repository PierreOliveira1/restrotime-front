export interface Restaurant {
	id: string;
	fantasyName: string;
	corporateName: string;
	cnpj: string;
	type: string;
	phoneNumber: string;
	email: string;
	address: Address;
	schedules: Schedule[];
	createdAt: string;
	updatedAt: string;
}

interface Address {
	id: string;
	street: string;
	number: string;
	complement: string;
	district: string;
	city: string;
	state: string;
	zipCode: string;
	createdAt: string;
	updatedAt: string;
}

interface Schedule {
	id: string;
	dayOfWeek: number;
	openingTime: string | null;
	closingTime: string | null;
	openingTime2: string | null;
	closingTime2: string | null;
	createdAt: string;
	updatedAt: string;
}
