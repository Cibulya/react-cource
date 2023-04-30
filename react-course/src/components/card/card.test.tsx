import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import carsJson from '../../assets/cars.json';
import Card from './card';

describe('Card', () => {
    it('Renders car card', () => {
        render(
            <Card
                key="Toyota Sprinter Trueno AE86"
                name={carsJson.cars[0].name}
                picture={carsJson.cars[0].picture}
                enginePower={carsJson.cars[0].enginePower}
                about={carsJson.cars[0].about}
                year={carsJson.cars[0].year}
                drive={carsJson.cars[0].drive}
            />
        );
        const card = screen.getAllByText(/Toyota Sprinter Trueno AE86/i);
        expect(card[0]).toBeInTheDocument();
    });
});
