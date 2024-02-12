import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { BlogsState } from "../../../../models";
import { setPageCount } from "../../../../redux/slices/filterSlice";
import { getBlogs, postBlogDelete } from "../../../../services/useEndpoints";

const BlogTable: FC = () => {
    const { pageNumber, pageCount } = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();
    const { data, isLoading, refetch } = useQuery([`blogs${pageNumber}`], () =>
        getBlogs(pageNumber)
    );
    const onDeleteBlog = async (id: number) => {
        await postBlogDelete(id);
        refetch();
    };
    useEffect(() => {
        if (data) {
            dispatch(setPageCount(Math.ceil(data?.items / 10)));
        }
    }, [data, isLoading]);
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-main uppercase bg-main dark:bg-main dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-3 py-3">
                            id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Названия
                        </th>
                        <th scope="col-2" className="px-6 py-3">
                            Текст
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Удалить
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data?.data?.map((el: BlogsState, i: string) => (
                            <tr
                                key={i}
                                className="bg-white border-b dark:bg-main dark:border-gray-700 hover:bg-mainHover"
                            >
                                <td className="px-3 py-4">
                                    <Link
                                        to={`/blogs/${el.id}`}
                                        className="px-6 py-4 font-medium text-main whitespace-nowrap dark:text-white"
                                    >
                                        {i + 1}
                                    </Link>
                                </td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-main whitespace-nowrap dark:text-white"
                                >
                                    <Link
                                        to={`/blogs/${el.id}`}
                                        className="px-6 py-4 font-medium text-main whitespace-nowrap dark:text-white"
                                    >
                                        {el.title}
                                    </Link>
                                </th>
                                <td className="px-6 py-4 font-medium text-main whitespace-nowrap dark:text-white">
                                    <Link
                                        to={`/blogs/${el.id}`}
                                        className="px-6 py-4 font-medium text-main whitespace-nowrap dark:text-white"
                                    >
                                        {el.text}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() => onDeleteBlog(el.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogTable;
