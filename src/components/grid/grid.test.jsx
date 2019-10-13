import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Grid from './grid';
import axios from 'axios';

describe('<Grid />', () => {

    configure({adapter: new Adapter()});
    let wrapper;
    let fetchPersonData = '';
    let columns = [{columnHeader: 'Name', columnField: 'name'},{columnHeader: 'Lastname', columnField: 'lastname'}]
    let resp = {data: {count: 2, results: [{name: 'test', lastname: 'something'}, {name: 'test', lastname: 'something'}]}};
    beforeAll(() => {

        fetchPersonData =jest.fn().mockImplementation(() => Promise.resolve(resp));
        wrapper = shallow(<Grid dataHandler={fetchPersonData}
            paginationParam={'page'}
            searchParam={'search'}
            columns={columns} />);
      });

    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Check Table Props', () => {
        const table = wrapper.find('Table');
        expect(table.props().data.length).toEqual(2);
        expect(table.props().columns.length).toEqual(2);
        expect(table.props().isLoading).toEqual(false);
    });

    it('Check Pagination Props', () => {
        const pagination = wrapper.find('Pagination');
        expect(pagination.props().count).toEqual(2);
        expect(pagination.props().currentPage).toEqual(1);
        expect(pagination.props().paginationParam).toEqual('page');
        expect(pagination.props().size).toEqual(2);
        expect(typeof pagination.props().paginationHandler).toEqual('function');
    });

    it('Check Search Props', () => {
        const pagination = wrapper.find('Search');
        expect(pagination.props().searchParam).toEqual('search');
        expect(typeof pagination.props().searchHandler).toEqual('function');
    });

    // it('renders 2 rows', () => {
    //   const rows = wrapper.find('table tbody tr');
    //   expect(rows).toHaveLength(2);
    // });
  
    // it('render 2 columns', function () {
    //   const columns = wrapper.find('table tbody tr').first().find('td');
    //   expect(columns).toHaveLength(2);
    // });

    // it('render is loading', function () {
    //     wrapper = shallow(<Table data={data} columns={columns} isLoading={true}   />);
    //     const row = wrapper.find('table tbody tr td');
    //     expect(row.text()).toEqual('Loding...');
    //   });
});
