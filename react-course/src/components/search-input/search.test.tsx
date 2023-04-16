import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
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
        expect(
            screen.getByPlaceholderText('Search something')
        ).toBeInTheDocument();
    });
});
