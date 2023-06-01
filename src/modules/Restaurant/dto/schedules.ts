export interface Schedule {
	id?: string;
	restaurantId?: string;
	dayOfWeek: number;
	openingTime?: string;
	closingTime?: string;
	openingTime2?: string;
	closingTime2?: string;
}
