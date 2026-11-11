import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBackground from './components/HomeBackground';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

const pageTransition = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.28, ease: 'easeOut' },
};

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={location.pathname} {...pageTransition}>
                <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <HomeBackgroundLayer />
            <Header />
            <main>
                <AnimatedRoutes />
            </main>
            <Footer />
        </Router>
    );
}

/** Affiche le fond global animé uniquement sur la page d'accueil. */
function HomeBackgroundLayer() {
    const { pathname } = useLocation();
    if (pathname !== '/' && pathname !== '/portfolio') return null;
    return <HomeBackground />;
}

export default App;
