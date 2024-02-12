import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterSliceInterface {
    count: number;
}
const initialState: CounterSliceInterface = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        setCountPlus: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        setCountMinus: (state, action: PayloadAction<number>) => {
            if (state.count > 0) {
                state.count -= action.payload;
            }
        },
    },
});

export const { setCountPlus, setCountMinus } = counterSlice.actions;
export default counterSlice.reducer;
