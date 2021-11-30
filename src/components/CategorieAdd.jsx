import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const CategorieAdd = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            // Accede a las categorias mediante callback para no pasarlas como props
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add categorie</h2>
            <input type="text" value={inputValue} onChange={handleInput}/>
        </form>
    )
}

CategorieAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
