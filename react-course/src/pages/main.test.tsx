import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import CardList from '../components/cardlist/cardList';
import { setupStore } from '../rtk/store/store';
import MainPage from './main';

const store = setupStore();

describe('Renders main page', () => {
    it('Renders Main page', async () => {
        render(
            <Provider store={store}>
                <MainPage />
            </Provider>
        );
        const searchInput = screen.getAllByPlaceholderText(/Search something/i);
        expect(searchInput[0]).toBeInTheDocument();
    });
    it('Renders card list', () => {
        render(
            <Provider store={store}>
                <CardList />
            </Provider>
        );
        const cardList = screen.getAllByRole('list');
        expect(cardList[0]).toBeInTheDocument();
        expect(cardList[0]).toHaveClass('cars__cards');
        expect(cardList[0]).toContainHTML('li');
    });
    // test('Get all Data first Fetch', async () => {
    //     const { findByText } = render(<ApiCardList results={firstfetch} />);
    //     expect(await findByText(/Rick Sanchez/i)).toBeInTheDocument();
    // });
    // test('Get Morty cards', async () => {
    //     const { findByText } = render(<ApiCardList results={mortySearch} />);
    //     expect(await findByText(/Alien Morty/i)).toBeInTheDocument();
    //     expect(await findByText(/Aqua Morty/i)).toBeInTheDocument();
    //     expect(await findByText(/Morty Smith/i)).toBeInTheDocument();
    //     expect(await findByText(/Big Head Morty/i)).toBeInTheDocument();
    // });
    // test('Get Ricks cards', async () => {
    //     const { findByText } = render(<ApiCardList results={rickSearch} />);
    //     expect(await findByText(/Rick Sanchez/i)).toBeInTheDocument();
    // });
});
