import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthSliceInterface {
	isAuth: boolean
	user: {}
}
const initialState: AuthSliceInterface = {
	isAuth: false,
	user: {},
}

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
	},
})

export const { setIsAuth } = authSlice.actions
export default authSlice.reducer
