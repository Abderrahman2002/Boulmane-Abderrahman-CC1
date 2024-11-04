import React, { useState } from 'react';

function Btnformulaire() {
  const [formData, setFormData] = useState({
    nom: '',
    email: ''
  });
  const [displayData, setDisplayData] = useState(null);

  const changer = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClick = () => {
    setDisplayData(formData);
  };

  return (
    <div>
      <h2>Formulaire de Saisie</h2>
      <form>
        <div>
          <label>Nom: </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={changer}
            placeholder="Entrez votre nom"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changer}
            placeholder="Entrez votre email"
          />
        </div>
      </form>

      <button onClick={handleClick}>Afficher les Contenus</button>

      {displayData && (
        <div>
          <h3>Contenu des Champs:</h3>
          <p><strong>Nom:</strong> {displayData.nom}</p>
          <p><strong>Email:</strong> {displayData.email}</p>
        </div>
      )}
    </div>
  );
}

export default Btnformulaire;
