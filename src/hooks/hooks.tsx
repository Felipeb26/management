/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_PATH, EMPLOYEE_PATH } from "../interfaces/enviroments.interface";

type Props = {
	url?: string;
	data?: any;
	params?: any;
	method:
		| "POST"
		| "GET"
		| "PUT"
		| "DELETE"
		| "post"
		| "get"
		| "put"
		| "delete";
};

export function useFetch<T = unknown>(props: Props) {
	const url = props.url === undefined ? "/" : props.url;
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios({
			baseURL: `${BASE_PATH}${EMPLOYEE_PATH}${url}`,
			data: props.data,
			params: props.params,
			method: props.method,
		})
			.then((response) => setData(response.data))
			.catch((err: Error) => setError(err))
			.finally(() => setLoading(!loading));
	}, [url, loading, props.data, props.params, props.method]);

	return { data, error, loading };
}
