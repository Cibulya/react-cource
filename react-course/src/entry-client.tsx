import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { IWindow } from './inerfaces/preload';
import { setupStore } from './rtk/store/store';

async function hydration() {
    const store = setupStore((window as IWindow).PRELOADED_STATE);

    hydrateRoot(
        document.getElementById('root') as HTMLElement,
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
    delete (window as IWindow).PRELOADED_STATE;
}
hydration();
