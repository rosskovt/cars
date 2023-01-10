import { configureStore } from "@reduxjs/toolkit";
import { addCar, removeCar, changeSearchTerm, carsReducer } from "./slices/carsSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
// import { resetFields } from "./actions";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    },
});

// console.log(store.getState());

export {
    store,
    addCar,
    removeCar,
    changeSearchTerm,
    carsReducer,
    changeName,
    changeCost,
    formReducer,
    // resetFields,
}; 