import React, { useState } from 'react';

const Btnchecked = () => {
	const [ formcheck, setFormcheck ] = useState(false);

	const handleCheckboxChange = () => {
		setFormcheck(true); // Inverse la valeur de formcheck à chaque clic
	};

	return (
		<div>
			<input type="checkbox" checked={formcheck} onChange={handleCheckboxChange} />
			{formcheck && <p>Accepte</p>}
		</div>
	);
};

export default Btnchecked;
