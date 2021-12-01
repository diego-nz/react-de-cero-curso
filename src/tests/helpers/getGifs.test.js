import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs fetch', () => {
    it('debe de traer 3 elementos', async() => {
        const gifs = await getGifs('DBZ');
        expect( gifs.length ).toBe(3);
    });

    it('debe tener 0 elementos', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
});
