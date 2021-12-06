import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba en el hook useFetchGifs', () => {
    it('debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'naruto' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    it('debe de retornar un arreglo de imgs y loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'naruto' ));

        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe(3);
        expect( loading ).toBe(false);
    });
});