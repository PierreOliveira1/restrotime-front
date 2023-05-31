import { QueryClientConfig } from 'react-query';

const queryClientConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: false,
			staleTime: 10 * 60 * 1000,
		},
	},
};

export { queryClientConfig };
