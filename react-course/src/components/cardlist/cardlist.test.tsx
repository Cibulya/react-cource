import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import CardList from './cardList';

describe('Card', () => {
    it('Renders car cards', async () => {
        render(<CardList />);
        const cardList = screen.getAllByRole('list');
        expect(cardList[0]).toBeInTheDocument();
    });
});
