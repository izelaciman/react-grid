import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Table from './table';

describe('<Table />', () => {
    configure({adapter: new Adapter()});
    let wrapper;
    let data = [{name: 'test', lastname: 'something'}, {name: 'test', lastname: 'something'}];
    let columns = [{columnHeader: 'Name', columnField: 'name'},{columnHeader: 'Lastname', columnField: 'lastname'}]
    
    beforeAll(() => {
        wrapper = shallow(<Table data={data} columns={columns} isLoading={false} />);
      });

    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Header Text', () => {
        const theadColumns = wrapper.find('table thead tr th');
        expect(theadColumns.first().text()).toEqual('Name');
        expect(theadColumns.last().text()).toEqual('Lastname');
      });
  
    it('renders 2 rows', () => {
      const rows = wrapper.find('table tbody tr');
      expect(rows).toHaveLength(2);
    });
  
    it('render 2 columns', function () {
      const columns = wrapper.find('table tbody tr').first().find('td');
      expect(columns).toHaveLength(2);
    });

    it('render is loading', function () {
        wrapper = shallow(<Table data={data} columns={columns} isLoading={true}   />);
        const row = wrapper.find('table tbody tr td');
        expect(row.text()).toEqual('Loding...');
      });
});
