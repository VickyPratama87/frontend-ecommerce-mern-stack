import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = action.payload.data;

			state.user = user;
			localStorage.setItem('user', JSON.stringify(user));
		},

		registerUser: (state, action) => {
			const user = action.payload.data;

			state.user = user;
			localStorage.setItem('user', JSON.stringify(user));
		},

		logoutUser: (state) => {
			state.user = null;
			localStorage.removeItem('user');
			toast.success('Logout success');
		},
	},
});

export const { loginUser, registerUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
