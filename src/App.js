import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import ContactPage from './pages/contact';
import ProjectsPage from './pages/projects';
import NotFoundPage from "./pages/404";
import ImprintPage from "./pages/imprint";
import Products from './pages/products';
import ApiDocs from './pages/api';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/imprint" element={<ImprintPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/api" element={<ApiDocs />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;