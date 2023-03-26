import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import FormComponent from './form';

describe('Form', () => {
    it('Renders car card', () => {
        render(<FormComponent />);
        expect(screen.getByText(/Name:/i)).toBeInTheDocument();
        expect(screen.getAllByLabelText('Image file:'));
    });
});
