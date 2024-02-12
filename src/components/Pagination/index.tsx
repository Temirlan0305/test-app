import React from "react";
import ReactPaginate from "react-paginate";
import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./Pagination.module.scss";

type PaginationProps = {
    value: number;
    onChangePagination: (e: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    value,
    onChangePagination,
}) => {
    const { pageCount } = useAppSelector((state) => state.filter);
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(elem) => {
                onChangePagination(elem.selected + 1);
            }}
            pageRangeDisplayed={pageCount + 1}
            pageCount={pageCount}
            forcePage={value - 1}
            previousLabel="<"
        />
    );
};

export default Pagination;
