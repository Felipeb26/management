import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchInterval: false, staleTime: 1000 * 60 * 30 },
	},
});

export default queryClient;
