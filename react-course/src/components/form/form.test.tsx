import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { setupStore } from '../../rtk/store/store';
import FormComponent from './form';

describe('Form', () => {
    it('Renders form', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );
        const inputName = screen.getAllByText(/Name:/i);
        const fileInput = screen.getAllByText(/Image file:/i);
        expect(inputName[0]).toBeInTheDocument();
        expect(fileInput[0]).toBeInTheDocument();
    });
});
