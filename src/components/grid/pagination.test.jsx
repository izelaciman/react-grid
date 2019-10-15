import React from 'react';
import { shallow  } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from './pagination';

describe('<Pagination />', () => {
    let paginationHandler;
    let wrapper;
  
    beforeAll(() => {
      paginationHandler = jest.fn();
      wrapper = shallow(<Pagination 
        count={87} 
        currentPage={1} 
        size={10} 
        paginationHandler={paginationHandler} 
        paginationParam="page"  />);
    });
  
    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  
    it('page count should be 9', () => {
      const pages = wrapper.find('ul li');
      expect(pages).toHaveLength(9);
    });
  
    it('calls handleSearch on type', function () {
      const pageLast = wrapper.find('button').last();
      pageLast.simulate('click', {target: {value: pageLast.props().value}});
      expect(paginationHandler).toHaveBeenCalledWith({target: {value: 9}});
    });
});
