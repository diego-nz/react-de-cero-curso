import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categorie } ) => {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( categorie ).then( data => setImages( data ));
    }, [categorie])


    return (
        <>
            <h3> {categorie} </h3>
            <div className="card-container">
                {images.map((img) => 
                    <GifGridItem key={img.id} {...img}/>
                )}
            </div>
        </>
    )
}
