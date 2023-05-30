import { API_URL } from '@/config/envs';

export class ApiError extends Error {
	public readonly statusCode: number;
	constructor(
		statusCode: number,
		message?: string | undefined,
		options?: ErrorOptions | undefined,
	) {
		super(message, options);
		this.statusCode = statusCode;
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
		const { message } = (await response.json()) as { message: string };

		throw new ApiError(response.status, `${message}`);
	}
}

export { fetchApi };
