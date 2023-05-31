export interface Data<T> {
	data: T[];
	pagination: Pagination;
}

interface Pagination {
	totalPages: number;
	currentPage: number;
	nextPage: number | null;
}
