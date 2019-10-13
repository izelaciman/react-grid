import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Search from './search';

describe('<Search />', () => {
    configure({adapter: new Adapter()});
    let searchHandler;
    let wrapper;
  
    beforeAll(() => {
      searchHandler = jest.fn();
      wrapper = shallow(<Search searchHandler={searchHandler}  />);
    });
  
    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  
    it('renders the input', () => {
      const input = wrapper.find('input');
      expect(input).toHaveLength(1);
    });
  
    it('calls handleSearch on type', function () {
      const search = wrapper.find('input');
      expect(search).toHaveLength(1);
      search.simulate('change',{target: {value: 'luke'}});
      expect(searchHandler).toHaveBeenCalledWith({target: {value: "luke"}});
    });
});
