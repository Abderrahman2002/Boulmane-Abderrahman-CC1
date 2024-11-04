import React, { useState } from 'react';
import './Connexion.css'

function Connexion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" }
    ];

    const errors = {
        uname: "Votre identifiant est incorrect.",
        upass: "Votre mot de passe est incorrect."
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const userData = database.find(user => user.username === username);
        
        if (userData) {
            if (userData.password !== password) {
                setErrorMessages({ name: "upass", message: errors.upass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) => 
        errorMessages.name === name && 
        <div className='error'>{errorMessages.message}</div>;

    const renderForm = (
        <div className='login-form'>
            <div className='title'>Connexion</div>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label>identifiant</label>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    {renderErrorMessage("uname")}
                </div>
                <div className='input-container'>
                    <label>Mot de passe</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    {renderErrorMessage("upass")}
                </div>
                <div className="button-container">
                    <input type="submit" value="Se connecter" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            {isSubmitted ? (
                <div>
                    <div className="title">Accueil</div>
                    <div>Bonjour {username}</div>
                </div>
            ) : renderForm}
        </div>
    );
}

export default Connexion;