// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categorie } ) => {
    
    // const [images, setImages] = useState([]);

    // Con : se esta renombrando el key en la destructuracion
    const { data: images, loading } = useFetchGifs( categorie );
    // useEffect(() => {
    //     getGifs( categorie ).then( data => setImages( data ));
    // }, [categorie])


    return (
        <>
            { loading && <h4>Cargando...</h4> }
            <h3> {categorie} </h3>
            <div className="card-container">
                {images.map((img) => 
                    <GifGridItem key={img.id} {...img}/>
                )}
            </div>
        </>
    )
}
