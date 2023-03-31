import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import AboutUs from './pages/aboutus';
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
            </Routes>
        </>
    );
}

export default App;
