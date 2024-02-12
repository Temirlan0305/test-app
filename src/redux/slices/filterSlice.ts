import { createSlice } from "@reduxjs/toolkit";

interface FilterSliceInterface {
    pageNumber: number;
    pageCount: number;
}
const initialState: FilterSliceInterface = {
    pageNumber: 1,
    pageCount: 1,
};

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload;
        },
    },
});

export const { setPageNumber, setPageCount } = filterSlice.actions;
export default filterSlice.reducer;
