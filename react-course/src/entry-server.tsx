import React from 'react';
import {
    renderToPipeableStream,
    RenderToPipeableStreamOptions,
} from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import cardsAPI from './api/card-service';
import App from './App';
import './index.scss';
import { setupStore } from './rtk/store/store';

export const render = async (
    url: string,
    options: RenderToPipeableStreamOptions
) => {
    const store = setupStore({ cardReducer: { searchQuery: '' } });
    await store.dispatch(cardsAPI.endpoints.filterFetch.initiate(''));
    const preData = store.getState();
    const preloadData = () => {
        return `<script>
        window.PRELOADED_STATE = ${JSON.stringify(preData).replace(
            /</g,
            '\\u003c'
        )}
      </script>`;
    };
    const html = (
        <React.StrictMode>
            <Provider store={store}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </Provider>
        </React.StrictMode>
    );
    const stream = renderToPipeableStream(html, options);
    return { stream, preloadData };
};
