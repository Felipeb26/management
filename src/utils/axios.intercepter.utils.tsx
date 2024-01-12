import axios, {
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";
import { BASE_PATH, EMPLOYEE_PATH } from "../interfaces/enviroments.interface";

export const EmployeeInstance: AxiosInstance = axios.create({
	baseURL: BASE_PATH + EMPLOYEE_PATH,
	timeout: 30000,
});

export const Response = () => {
	EmployeeInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			return response;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
};

export const Request = () => {
	EmployeeInstance.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
};
