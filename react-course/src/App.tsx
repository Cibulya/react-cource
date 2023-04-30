import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Loading from './components/loadingThing/loading';

import './index.scss';
import AboutUs from './pages/aboutus';
import CarsPage from './pages/carsPage';
import FormPage from './pages/form';
import MainPage from './pages/main';
import NotFoundPage from './pages/NotFound';
import SfxPage from './pages/SfxPage';

function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/cars" element={<CarsPage />} />
                    <Route path="/sfx" element={<SfxPage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
