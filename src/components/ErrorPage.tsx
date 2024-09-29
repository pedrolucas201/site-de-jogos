import '../styles/styles.css'; // Certifique-se de criar esse arquivo CSS

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oops! A página que você está procurando não foi encontrada.</p>
            <a href="/" className="back-home-button">Voltar para a Home</a>
        </div>
    );
};

export default ErrorPage;
