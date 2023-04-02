import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import FormComponent from './form';

describe('Form', () => {
    it('Renders form', () => {
        render(<FormComponent />);
        expect(screen.getByText(/Name:/i)).toBeInTheDocument();
        expect(screen.getByText(/Image file:/i)).toBeInTheDocument();
    });
});
