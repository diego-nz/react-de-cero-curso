import React from 'react';
import { shallow } from 'enzyme';
import { CategorieAdd } from '../../components/CategorieAdd';

describe('Pruebas en el component <CategorieAdd />', () => {
    // Para evaluar la funcion
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallow( <CategorieAdd setCategories={setCategories}/> );
    })

    it('debe mostrar correctamente el componente', () => {    
        expect( wrapper ).toMatchSnapshot();
    });

    it('debe cambiar la caja de texto', () => {    
        const input = wrapper.find( 'input' );
        const value = 'boruto';
        input.simulate('change', { target:{ value: value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    it('no debe enviar la informacion al evento submit', () => {
        // Llaves para simular el evento
        wrapper.find('form').simulate('submit', { 
            // Metodo dentro de objeto
            preventDefault(){}
        });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    it('debe llamar el setCategories y limpiar la acaja de texto', () => {
        const value = 'Goku';
        const input = wrapper.find( 'input' );
        input.simulate('change', { target:{ value: value } }); 

        // Llaves para simular el evento
        wrapper.find('form').simulate('submit', { 
            preventDefault(){}
        });
        // Que sea llamada la funcion
        expect( setCategories ).toHaveBeenCalled();
        // Que sea llamada la funcion con una funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        // expect( setCategories ).toHaveBeenCalledTimes(1);

        // Limpiar
        expect( input.prop('value') ).toBe('');

    });
});