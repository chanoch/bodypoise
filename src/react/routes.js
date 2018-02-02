import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import React from 'react';

const routes = [
    { path: '/', action: () => <HomePage /> },
    { path: '/about', action: () => <AboutMePage /> },
    { path: '/contact', action: () => <ContactPage /> }
];

export default routes;
