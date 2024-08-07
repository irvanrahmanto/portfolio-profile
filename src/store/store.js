import {combineReducers} from "@reduxjs/toolkit";

/** importing the reducer */
import certificateReducer from "../features/certificateReducer";
import portfolioReducer from "../features/portfolioReducer";

const store = combineReducers({
    portfolio: certificateReducer,
    certificate: portfolioReducer,
})

export default store;