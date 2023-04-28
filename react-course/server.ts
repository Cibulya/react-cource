import express from 'express';
import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'vite';

const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

const app = express();

const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
});

app.use(vite.middlewares);

app.use('/', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '');
        let template = fs.readFileSync('./index.html', 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const parts = template.split('<!--app-html-->');
        const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');
        res.write(parts[0]);
        const { stream, preloadData } = await render(url, {
            onShellReady() {
                stream.pipe(res);
            },
            onAllReady() {
                const preloadedCards = parts[1].replace(
                    '<!--cardsFromApi-->',
                    preloadData()
                );
                res.write(preloadedCards);
                res.end();
            },
        });
    } catch (e) {
        if (e instanceof Error) {
            vite?.ssrFixStacktrace(e as Error);
            res.status(500).end(e.stack);
        }
    }
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://localhost:${port}`);
});
