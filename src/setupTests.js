import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
// Enzyme
Enzyme.configure({ adapter: new Adapter() });
// Enzyme to json
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));