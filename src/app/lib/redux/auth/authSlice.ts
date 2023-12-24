import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    // add other user properties here...
}

interface AuthState {
    accessToken: string;
    user: User;
}

const initialState: Partial<AuthState> = {
    accessToken: undefined,
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<AuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: state => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
