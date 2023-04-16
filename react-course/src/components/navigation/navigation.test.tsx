import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { setupStore } from '../../rtk/store/store';
import HeaderNav from './navigation';

describe('Renders nav bar', () => {
    it('Testing text content', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <HeaderNav />
                </BrowserRouter>
            </Provider>
        );
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
        expect(navbar).toHaveTextContent('Main');
        expect(navbar).toHaveTextContent('About Us');
        expect(navbar).toHaveTextContent('Form');
        expect(navbar).toHaveTextContent('Cars');
    });
});
