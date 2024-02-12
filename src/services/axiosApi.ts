import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";

interface CustomAxiosHeaders {
    "Content-Type"?: string;
}

interface CustomAxiosInstance extends AxiosInstance {
    <T = any>(config: InternalAxiosRequestConfig<CustomAxiosHeaders>): Promise<
        AxiosResponse<T>
    >;
    <T = any>(
        url: string,
        config?: InternalAxiosRequestConfig<CustomAxiosHeaders>
    ): Promise<AxiosResponse<T>>;
}

const anAxiosApi: CustomAxiosInstance = axios.create({
    baseURL: "https://65c961a13b05d29307de8bc4.mockapi.io/",
    timeout: 10000,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    },
});

// anAxiosApi.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//     return config;
// });

export default anAxiosApi;
