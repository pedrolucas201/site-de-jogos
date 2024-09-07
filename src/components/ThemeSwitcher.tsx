import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/styles.css'; 

const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }, [theme]);

    if (!isHomePage) {
        return null; // Não renderiza o botão se não estiver na página inicial
    }

    return (
        <button className="theme-switcher" onClick={toggleTheme}>
            Tema: {theme === 'light' ? 'Escuro' : 'Claro'} 
        </button>
    );
};

export default ThemeSwitcher;
