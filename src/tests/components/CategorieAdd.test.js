import React from 'react';
import { shallow } from 'enzyme';
import { CategorieAdd } from '../../components/CategorieAdd';

describe('Pruebas en el component <CategorieAdd />', () => {
    const setCategories = () => {
    }
    const wrapper = shallow( <CategorieAdd setCategories={setCategories}/> );

    it('debe mostrar correctamente el componente', () => {    
        expect( wrapper ).toMatchSnapshot();
    });
    it('debe cambiar la caja de texto', () => {    
        const input = wrapper.find( 'input' );
        const value = 'Hola mundo';
        input.simulate('change', { target:{ value: value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    });
});