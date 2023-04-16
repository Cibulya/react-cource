import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { setupStore } from '../rtk/store/store';
import FormPage from './form';

describe('Renders nav bar', () => {
    it('Testing text content', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <FormPage />
                </BrowserRouter>
            </Provider>
        );
        const form = screen.getByRole('form');
        const inputs = screen.getAllByDisplayValue('');
        const submitButton = screen.getByText('Submit');
        expect(form).toBeInTheDocument();
        expect(inputs.length).toBeGreaterThanOrEqual(3);
        expect(submitButton).toHaveAttribute('type', 'submit');
    });
});
