// ListeVoitures.jsx
import React, { useState } from 'react';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const ListeVoitures = () => {
    // 1. Initialisation du state
    const [voitures, setVoitures] = useState([
        {
            "id": "v1",
            "Marque": "Dacia_Logan",
            "TypeCarburant": "Diesel",
            "PrixLocation": 200,
            "image": "dacia1.jpg"
        },
        {
            "id": "v2",
            "Marque": "Peugeot208",
            "TypeCarburant": "Essance",
            "PrixLocation": 400,
            "image": "peugeot.jpg"
        }
    ]);

    // Fonction pour ajouter une voiture
    const ajouterVoiture = (nouvelleVoiture) => {
        setVoitures([...voitures, { ...nouvelleVoiture, id: `v${voitures.length + 1}` }]);
    };

    // Fonction pour supprimer une voiture
    const supprimerVoiture = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?")) {
            setVoitures(voitures.filter(voiture => voiture.id !== id));
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Gestion des Voitures</h2>
            <AjouterVoiture onAjouter={ajouterVoiture} />
            <table className="w-full mt-4 border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Image</th>
                        <th className="border p-2">Marque</th>
                        <th className="border p-2">Type Carburant</th>
                        <th className="border p-2">Prix Location</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {voitures.map(voiture => (
                        <Voiture 
                            key={voiture.id} 
                            voiture={voiture} 
                            onSupprimer={supprimerVoiture}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeVoitures;