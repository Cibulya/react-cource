import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import AboutUs from './aboutus';

import { setupStore } from '../rtk/store/store';

describe('AboutUs', () => {
    it('Renders About TEXT', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <AboutUs />
            </Provider>
        );
        expect(screen.getByText(/Initial D/i)).toBeInTheDocument();
    });
});
