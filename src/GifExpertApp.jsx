import React, { useState } from 'react';
import { CategorieAdd } from './components/CategorieAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['']);
    // const [inputValue, setInputValue] = useState('')

    // const handleAdd = () => {
    // Para el control del input
        
    // ** Otra forma de hacer Callback que devuelve el estado anterio + lo nuevo
    // setCategories( cats => [...cats,'hiigi','hooal']);

    // setCategories([...categories, inputValue]);
    // setInputValue('');
    // }

    // Para settear valor al input
    // const handleInput = (e) => {
    //     setInputValue(e.target.value);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            
            {/* El input */}
            {/* <input type="text" onChange={(e) => handleInput(e)} value={inputValue}/> */}
            {/* <button value="Agregar" onClick={handleAdd}>Agregar</button> */}

            <CategorieAdd setCategories={ setCategories } />

            {/* <ul> */}
                {categories.map((value, index) => {
                    // return <li key={index}>{value}</li>
                    // Si no quiero poner return, quitar las llaves
                    return <GifGrid 
                        categorie={value} 
                        key={index} 
                    />
                })}
            {/* </ul> */}
        </>
    )
}
