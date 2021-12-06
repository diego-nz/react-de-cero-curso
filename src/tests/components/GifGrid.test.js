import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas del componente gifgrid', () => {
    const categorie = 'naruto';
    
    it('debe mostrar el componente <GifGrid>', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid categorie={categorie} /> );
        expect( wrapper ).toMatchSnapshot();
    });

    it('debe de mostrar items cuando se cargan imagenes de useFetchGifs', () => {
        const gifs = [
            {id: 1, title: 'titulo-1', image:'https://ruta/de/imagen/1.gif'},
            {id: 2, title: 'titulo-2', image:'https://ruta/de/imagen/2.gif'},
            {id: 3, title: 'titulo-3', image:'https://ruta/de/imagen/3.gif'},
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid categorie={categorie} /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
});