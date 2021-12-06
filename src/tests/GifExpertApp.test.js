import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";


describe('Pruebas del componente GifExpertApp', () => {
    it('debe mostrar correctamente el componente', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });
    it('debe de mostrar una lista de categorias', () => {
        const categories = ['Dragon ball', 'Naruto'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>)
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    });
});