import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en componente GifGridItem', () => {
    // Para simular las proptypes de gifgriditem
    const title = 'Un titulo';
    const image = 'https://urldemimiagen.com'

    // Para hacer el snapshot y con u en terminal se hace un update si cambia algo en el componente
    const wrapper = shallow(<GifGridItem title={ title } image={ image } />);

    it('debe de mostrar correctamente el componente GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    it('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('figcaption');
        expect(p.text()).toBe( title );
    });

    it('debe tener la imagen igual al src asi como alt', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(image);
        expect( img.prop('alt') ).toBe(title);
    });
    
    it('debe tener las clases card__item', () => {
        const figure = wrapper.find('figure');
        expect( figure.hasClass('card__item') ).toBe(true);
    });
})
