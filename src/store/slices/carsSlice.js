import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        //to give action.paylod in a form of name and cost values
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },

        //to give action.paylod in a form of id
        removeCar(state, action) {
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase()
    // }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;