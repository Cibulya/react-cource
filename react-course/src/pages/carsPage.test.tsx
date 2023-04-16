import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { setupStore } from '../rtk/store/store';
import CarsPage from './carsPage';

describe('AboutUs', () => {
    it('Renders About TEXT', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <CarsPage />
            </Provider>
        );
        const cars = screen.getAllByRole('listitem');
        expect(cars[0]).toBeInTheDocument();
        expect(cars[0]).toHaveTextContent(/Toyota Sprinter Trueno AE86/i);
        expect(cars.length).toBeLessThanOrEqual(10);
        expect(cars[7]).toHaveAttribute('role', 'listitem');
    });
});
