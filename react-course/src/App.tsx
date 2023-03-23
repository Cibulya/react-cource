import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus';
import NotFound from './pages/NotFound';

export function App(): JSX.Element {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
