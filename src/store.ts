import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import authReducer from "./features/auth/authSlice";
import { httpClient } from "./utilities";


const Logger = (store: any) => (next: any) => (action: any) => {
    console.log('action ', action);
}

export default configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk.withExtraArgument(httpClient), Logger)
}
);