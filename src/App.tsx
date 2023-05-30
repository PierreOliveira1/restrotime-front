import { GlobalStyles } from './styles/globalStyles';
import { Routes } from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { queryClientConfig } from './config/queryClientConfig';

const queryClient = new QueryClient(queryClientConfig);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<Routes />
		</QueryClientProvider>
	);
}

export { App };
