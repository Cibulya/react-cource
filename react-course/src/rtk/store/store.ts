import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import cardsAPI from '../../api/card-service';
import cardReducer from './reducers/CardSlice';
import formReducer from './reducers/FormSlice';

export const rootReducer = combineReducers({
    cardReducer,
    formReducer,
    [cardsAPI.reducerPath]: cardsAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware().concat(cardsAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
