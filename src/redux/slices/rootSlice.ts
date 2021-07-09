import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Honda',
        model: 'Civic',
        year: 1993,
        price: 3000,
        mpg: 25,
        color: 'red',
        weight: '2000',
        upgrades: 'sound system',
        condition: 'used',
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseMake} = rootSlice.actions;