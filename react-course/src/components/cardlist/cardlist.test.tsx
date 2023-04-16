import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import CardList from './cardList';

describe('Card', () => {
    it('Renders car cards', () => {
        render(<CardList />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});
