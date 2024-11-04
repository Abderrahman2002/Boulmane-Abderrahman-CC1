// Voiture.jsx
import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

const Voiture = ({ voiture, onSupprimer }) => {
    return (
        <tr>
            <td className="border p-2">{voiture.id}</td>
            <td className="border p-2">
                <img 
                    src={voiture.image} 
                    alt={voiture.Marque} 
                    className="w-24 h-16 object-cover"
                />
            </td>
            <td className="border p-2">{voiture.Marque}</td>
            <td className="border p-2">{voiture.TypeCarburant}</td>
            <td className="border p-2">{voiture.PrixLocation} DH</td>
            <td className="border p-2">
                <button 
                    onClick={() => onSupprimer(voiture.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Supprimer
                </button>
            </td>
        </tr>
    );
};

// Définition des PropTypes
Voiture.propTypes = {
    voiture: PropTypes.shape({
        id: PropTypes.string.isRequired,
        Marque: PropTypes.string.isRequired,
        TypeCarburant: PropTypes.string.isRequired,
        PrixLocation: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    onSupprimer: PropTypes.func.isRequired
};

export default Voiture;