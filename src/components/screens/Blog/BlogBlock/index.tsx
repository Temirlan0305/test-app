import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
    setPageCount,
    setPageNumber,
} from "../../../../redux/slices/filterSlice";
import { getBlogsAll } from "../../../../services/useEndpoints";
import Container from "../../../Container";
import Pagination from "../../../Pagination";
import TitleField from "../../../ui/Field/TitleField/titleField";
import BlogTable from "../BlogTable";

const BlogBlock: FC = () => {
    const { pageNumber } = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();
    const onChangePagination = (ev: number) => {
        dispatch(setPageNumber(ev));
    };

    return (
        <div>
            <Container>
                <div>
                    <TitleField text="Списки" />
                    <div className="mb-[20px]">
                        <BlogTable />
                    </div>
                    <Pagination
                        value={pageNumber}
                        onChangePagination={onChangePagination}
                    />
                    <div className="flex justify-end">
                        <Link
                            to="/blogs/create"
                            className="font-normal text-14 text-main underline"
                        >
                            Создать список
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogBlock;
