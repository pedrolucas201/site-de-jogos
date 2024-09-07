import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'; // Importe o CSS do botão

const BackToHomeButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button className="back-to-home-button" onClick={handleClick}>
            Voltar para Home
        </button>
    );
};

export default BackToHomeButton;
