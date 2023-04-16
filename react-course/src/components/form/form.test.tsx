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
        expect(screen.getByText(/Name:/i)).toBeInTheDocument();
        expect(screen.getByText(/Image file:/i)).toBeInTheDocument();
    });
});
