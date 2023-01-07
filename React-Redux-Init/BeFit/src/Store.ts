import { configureStore, createReducer } from "@reduxjs/toolkit"
 
const initialState = {
    givenValue: 0
}
const customeReducer = createReducer(initialState, {
    increament: (state) => {
        state.givenValue += 1;
    },
    increamentByValue: (state, action)=> { 
        state.givenValue += action.payload;
    },
    decreament: (state) => {
        state.givenValue -= 1;
        console.log( state)
    }
});

const Store = configureStore({
    reducer: {reducer: customeReducer},
});

export default Store