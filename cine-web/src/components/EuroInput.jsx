import React, { useState } from 'react';

const EuroInput = () => {
    const [amount, setAmount] = useState('');

    const formatAmount = (value) => {
        // Rimuovi tutto tranne numeri e virgole
        const cleanValue = value.replace(/[^\d,]/g, '');

        // Dividi il valore in parte intera e parte decimale
        const parts = cleanValue.split(',');
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Ricompone la parte formattata
        return parts.length > 1 ? integerPart + ',' + parts[1] : integerPart;
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatAmount(inputValue);

        // Imposta il valore formattato nello stato
        setAmount(formattedValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Importo inserito: €${amount}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Inserisci importo in euro:
                <input
                    type="text"
                    value={amount}
                    onChange={handleChange}
                    placeholder="20,30"
                />
            </label>
            <button type="submit">Invia</button>
        </form>
    );
};

export default EuroInput;
