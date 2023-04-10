import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import AboutUs from './pages/aboutus';
import CarsPage from './pages/carsPage';
import FormPage from './pages/form';
import MainPage from './pages/main';
import NotFoundPage from './pages/NotFound';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/cars" element={<CarsPage />} />
            </Routes>
        </>
    );
}

export default App;
