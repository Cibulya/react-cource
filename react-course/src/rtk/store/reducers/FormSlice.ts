import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormArray, IFormElementsValues } from '../../../inerfaces/formtypes';

const initialState: IFormArray = { formResults: [] };

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addFormAnswers(state, action: PayloadAction<IFormElementsValues>) {
            state.formResults.push(action.payload);
        },
    },
});

export default formSlice.reducer;
