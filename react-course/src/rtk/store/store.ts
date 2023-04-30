import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
    PreloadedState,
} from '@reduxjs/toolkit';
import cardsAPI from '../../api/card-service';
import cardReducer from './reducers/CardSlice';
import formReducer from './reducers/FormSlice';

export const rootReducer = combineReducers({
    cardReducer,
    formReducer,
    [cardsAPI.reducerPath]: cardsAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware().concat(cardsAPI.middleware),
        preloadedState,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
