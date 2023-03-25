import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import carsJson from '../../assets/cars.json';
import Card from './card';

describe('Card', () => {
    it('Renders car card', () => {
        render(
            <Card key="Toyota Sprinter Trueno AE86" cars={carsJson.cars[0]} />
        );
        expect(
            screen.getByText(/Toyota Sprinter Trueno AE86/i)
        ).toBeInTheDocument();
        expect(screen.getAllByAltText(/carImage/i));
    });
});
