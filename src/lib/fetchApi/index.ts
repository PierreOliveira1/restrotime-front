import { API_URL } from '@/config/envs';

interface ZodError {
	path: string;
	message: string;
}

interface Errors {
	issues?: ZodError[];
	message?: string;
}
export class ApiError extends Error {
	public readonly statusCode: number;
	public readonly errors: Errors;
	constructor(
		statusCode: number,
		errors: Errors,
		message?: string | undefined,
		options?: ErrorOptions | undefined,
	) {
		super(message, options);
		this.statusCode = statusCode;
		this.errors = errors;
	}
}

async function fetchApi(
	url: string,
	init?: RequestInit | undefined,
): Promise<Response> {
	const response = await fetch(API_URL + url, {
		...init,
		headers: {
			...init?.headers,
		},
	});

	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		const error: ZodError | { message: string } = await response.json();

		throw new ApiError(response.status, error, error.message);
	}
}

export { fetchApi };
