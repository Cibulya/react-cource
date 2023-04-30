import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { setupStore } from '../../rtk/store/store';
import SearchInput from './search';

describe('Cinput', () => {
    it('Renders car card', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <SearchInput />
            </Provider>
        );
        const search = screen.getAllByPlaceholderText(/Search something/i);
        expect(search[0]).toHaveClass('search');
    });
});
