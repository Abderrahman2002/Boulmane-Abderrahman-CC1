// AjouterVoiture.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AjouterVoiture = ({ onAjouter }) => {
    const [nouvelleVoiture, setNouvelleVoiture] = useState({
        Marque: '',
        TypeCarburant: '',
        PrixLocation: '',
        image: ''
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAjouter({
            ...nouvelleVoiture,
            PrixLocation: Number(nouvelleVoiture.PrixLocation)
        });
        setNouvelleVoiture({
            Marque: '',
            TypeCarburant: '',
            PrixLocation: '',
            image: ''
        });
        setImagePreview(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNouvelleVoiture({
            ...nouvelleVoiture,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setNouvelleVoiture({
                ...nouvelleVoiture,
                image: imageUrl
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    name="Marque"
                    placeholder="Marque"
                    value={nouvelleVoiture.Marque}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="TypeCarburant"
                    placeholder="Type de carburant"
                    value={nouvelleVoiture.TypeCarburant}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="PrixLocation"
                    placeholder="Prix de location"
                    value={nouvelleVoiture.PrixLocation}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <div className="space-y-2">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    {imagePreview && (
                        <div className="relative">
                            <img
                                src={imagePreview}
                                alt="Aperçu"
                                className="w-32 h-24 object-cover rounded"
                            />
                            <div className="mt-1 text-sm text-green-600">
                                ✓ Image chargée
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Ajouter une voiture
            </button>
        </form>
    );
};

AjouterVoiture.propTypes = {
    onAjouter: PropTypes.func.isRequired
};

export default AjouterVoiture;