import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'; // Importe o CSS do botão
import HomeIcon from '@mui/icons-material/Home';


const BackToHomeButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button className="back-to-home-button" onClick={handleClick}>
            <HomeIcon /> 
        </button>
    );
};

export default BackToHomeButton;
