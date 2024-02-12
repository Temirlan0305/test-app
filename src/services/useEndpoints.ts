import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import * as serviseTypes from "../models/Services.module";
import anAxiosApi from "./axiosApi";

export const getBlogsId = async (
    id: number
): Promise<serviseTypes.BlogsState | undefined> => {
    const { data } = await axios.get(`http://localhost:4200/blogs/${id}`);
    return data as serviseTypes.BlogsState;
};

export const getBlogs = async (pageId: number) => {
    const { data } = await axios.get(
        `http://localhost:4200/blogs?_page=${pageId}&_per_page=10`
    );
    return data as any;
};

export const getBlogsAll = async (): Promise<
    serviseTypes.BlogsState[] | undefined
> => {
    const { data } = await axios.get("http://localhost:4200/blogs");
    return data.data as serviseTypes.BlogsState[];
};

export const postBlogCreate = async (data: {
    title: string;
    text: string;
}): Promise<AxiosResponse<any> | false | undefined> => {
    try {
        const response: AxiosResponse<any> = await axios.post(
            "http://localhost:4200/blogs",
            data
        );
        if (response) {
            toast.success("Вы успешно создали список");
            return response;
        }
        return undefined;
    } catch (e) {
        toast.error("Произошло ошибка");
        return false;
    }
};

export const postBlogDelete = async (id: number) => {
    try {
        await axios.delete(`http://localhost:4200/blogs/${id}`);
        toast.success(`Вы успешно удалили id: ${id}`);
    } catch (e) {
        toast.error("Произошло ошибка");
        return false;
    }
};

export const putBlogFix = async (id: number, title: string, text: string) => {
    try {
        const response: AxiosResponse<any> = await axios.put(
            `http://localhost:4200/blogs/${id}`,
            { id, title, text }
        );
        if (response) {
            toast.success("Успешно редактировался");
            return response;
        }
        return undefined;
    } catch (e) {
        toast.error("Произошло ошибка");
        return false;
    }
};

export const getFakeApi = async (): Promise<
    serviseTypes.BlogsState[] | undefined
> => {
    const { data } = await anAxiosApi.get("test");
    return data as serviseTypes.BlogsState[];
};
