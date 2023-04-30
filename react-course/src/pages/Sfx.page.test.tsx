import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { setupStore } from '../rtk/store/store';
import SfxPage from './SfxPage';

describe('AboutUs', () => {
    it('Renders About TEXT', () => {
        const store = setupStore();
        render(
            <Provider store={store}>
                <SfxPage />
            </Provider>
        );
        const sfxTitle = screen.getAllByText('Ultra magic SFX Goofy machine');
        expect(sfxTitle[0]).toBeInTheDocument();
        const imageButton = screen.getAllByAltText(
            '/src/assets/wierdSfx/goofy.png'
        );
        expect(imageButton[0]).toBeInTheDocument();
        const imageButton2 = screen.getAllByAltText(
            '/src/assets/wierdSfx/ding.jpg'
        );
        expect(imageButton2[0]).toBeInTheDocument();
    });
});
