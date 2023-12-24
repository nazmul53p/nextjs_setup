import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDemo } from "./demoApi";

const initialState: IDemo = {
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: "",
    },
};

export const demoSlice = createSlice({
    name: "demoSlice",
    initialState,
    reducers: {
        getDemo: (state, action: PayloadAction<IDemo>) => {
            state = action.payload;
        },
    },
});

export const { getDemo } = demoSlice.actions;

export default demoSlice.reducer;
