import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import SearchInput from './search';

describe('Cinput', () => {
    it('Renders car card', () => {
        render(<SearchInput />);
        expect(
            screen.getByPlaceholderText('Search something')
        ).toBeInTheDocument();
    });
});
