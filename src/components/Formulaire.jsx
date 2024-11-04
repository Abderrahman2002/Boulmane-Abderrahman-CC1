import React, { useState } from 'react';

function Formulaire() {
  const [formData, setFormData] = useState({
    nom: '',
    email: ''
  });
  const [lastInput, setLastInput] = useState('');

  const changer = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Mettre à jour le message selon le dernier champ modifié
    if (name === 'nom') {
      setLastInput(`Votre nom : ${value}`);
    } else if (name === 'email') {
      setLastInput(`Votre email : ${value}`);
    }
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

      <div>
        <h3>Contenu Actuel :</h3>
        <p>{lastInput}</p>
      </div>
    </div>
  );
}

export default Formulaire;
