import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'


export const GifGrid = ( { categorie } ) => {
    
    // const [images, setImages] = useState([]);

    // Con : se esta renombrando el key en la destructuracion
    const { data: images, loading } = useFetchGifs( categorie );
    // useEffect(() => {
    //     getGifs( categorie ).then( data => setImages( data ));
    // }, [categorie])


    return (
        <>
            <h3> {categorie} </h3>
            { loading && <h4 className="animate__animated animate__flash">Cargando...</h4> }
            <div className="card-container animate__animated animate__zoomInUp">
                {images.map((img) => 
                    <GifGridItem key={img.id} {...img}/>
                )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categorie: PropTypes.string.isRequired
}
