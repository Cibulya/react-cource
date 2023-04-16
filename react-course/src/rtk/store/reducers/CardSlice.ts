import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardsState } from '../../../inerfaces/apiData';

const initialState: CardsState = {
    cards: [],
    searchQuery: '',
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            return { ...state, searchQuery: action.payload };
        },
    },
});

export default cardSlice.reducer;
