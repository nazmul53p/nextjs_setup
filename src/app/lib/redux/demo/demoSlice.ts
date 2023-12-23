import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    modalType: "",
    modal: false,
    isForgetPassword: false,
};

export const demoSlice = createSlice({
    name: "demoSlice",
    initialState,
    reducers: {
        logout: () => initialState,
        userInfo: (state, action) => {
            state.user = action.payload;
        },

        userModalType: (state, action) => {
            state.modalType = action.payload;
        },
        isModalOpen: (state, action) => {
            state.modal = action.payload;
        },
        setIsForgotPassword: (state, action) => {
            state.isForgetPassword = action.payload;
        },
    },
});

export const {
    logout,
    userInfo,
    userModalType,
    isModalOpen,
    setIsForgotPassword,
} = demoSlice.actions;

// Export the authSlice.reducer to be included in the store.
export const { reducer: demoReducer } = demoSlice;
