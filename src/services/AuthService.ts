import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import * as serviseTypes from "../models/Auth.module";
export const postLoginCreate = async (data: {
    title: string;
    text: string;
}): Promise<AxiosResponse<any> | false | undefined> => {
    try {
        const response: AxiosResponse<any> = await axios.post(
            "http://localhost:4200/auth",
            data
        );
        if (response) {
            toast.success("Вы успешно зарегистрировались");
            return response;
        }
        return undefined;
    } catch (e) {
        toast.error("Произошло ошибка");
        return false;
    }
};

export const getUserName = async (
    username: string,
    password: string
): Promise<serviseTypes.AuthType[] | undefined> => {
    const { data } = await axios.get(
        `http://localhost:4200/users?username=${username}&password=${password}`
    );
    return data as serviseTypes.AuthType[];
};
