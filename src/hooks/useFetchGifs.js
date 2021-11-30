import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( categorie ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        setTimeout(() => {
            getGifs( categorie ).then( data => setstate( {data: data, loading: false} ));
        }, 3000);
    }, [categorie])

    return state

}