import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { setupStore } from '../rtk/store/store';
import NotFoundPage from './NotFound';

describe('AboutUs', () => {
    it('Renders About TEXT', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <NotFoundPage />
                </BrowserRouter>
            </Provider>
        );
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    });
});
