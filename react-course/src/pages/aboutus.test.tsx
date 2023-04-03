import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import AboutUs from './aboutus';

describe('AboutUs', () => {
    it('Renders About TEXT', () => {
        render(<AboutUs />);
        expect(screen.getByText(/Initial D/i)).toBeInTheDocument();
    });
});
