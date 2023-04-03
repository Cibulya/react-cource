import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import carsJson from '../assets/cars.json';
import Card from '../components/card/card';
import CardList from '../components/cardlist/cardList';
import MainPage from './main';

const randomCar = carsJson.cars[0];

describe('Renders main page', () => {
    it('Renders About TEXT', () => {
        render(<MainPage />);
        const searchInput = screen.getByRole('input');
        expect(searchInput).toBeInTheDocument();
    });
    it('Renders card list', () => {
        render(<CardList />);
        const cardList = screen.getByRole('list');
        expect(cardList).toBeInTheDocument();
        expect(cardList).toHaveClass('cars__cards');
        expect(cardList).toContainHTML('li');
    });
    it('Render car card', () => {
        render(
            <Card
                name={randomCar.name}
                picture={randomCar.picture}
                year={randomCar.year}
                drive={randomCar.drive}
                enginePower={randomCar.enginePower}
                about={randomCar.about}
            />
        );
        const card = screen.getByRole('listitem');
        expect(card).toBeInTheDocument();
    });
});
