import React, { useState } from 'react';

const Checktable = () => {
	const [ formcheck, setFormcheck ] = useState([]);

	const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;

		if (checked) {
			// Ajouter l'élément coché
			setFormcheck([ ...formcheck, value ]);
		} else {
			// Supprimer l'élément décoché
			setFormcheck(formcheck.filter((item) => item !== value));
		}
	};

	return (
		<div>
			<h2>Choisissez vos langues</h2>

			<label>
				<input type="checkbox" value="Arabe" onChange={handleCheckboxChange} />
				Arabe
			</label>
			<br />
			<label>
				<input type="checkbox" value="Français" onChange={handleCheckboxChange} />
				Français
			</label>
			<br />
			<label>
				<input type="checkbox" value="Anglais" onChange={handleCheckboxChange} />
				Anglais
			</label>

			<h3>Langues sélectionnées :</h3>
			<ul>{formcheck.map((langue, index) => <li key={index}>{langue}</li>)}</ul>
		</div>
	);
};

export default Checktable;
