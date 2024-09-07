import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import GamePage from './components/GamePage';
import ThemeSwitcher from './components/ThemeSwitcher'; // Importe o ThemeSwitcher
import Login from './components/Login';
import Registro from './components/Registro';
import Perfil from './components/Perfil';

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ height: '100%' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:categoryName" element={<Category />} />
                    <Route path="/games/:gameId" element={<GamePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registro />} />
                    <Route path='/perfil' element={<Perfil />} />
                    
                    
                    
                    <Route path="*" element={<div>404 - Página não encontrada</div>} />
                </Routes>
                <ThemeSwitcher />
            </div>
        </Router>
    );
};

export default App;
