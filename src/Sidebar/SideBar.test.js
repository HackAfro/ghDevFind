import React       from 'react';
import {shallow}   from 'enzyme';
import SideBar     from './SideBar';

const lang = 'html';
const onChange = jest.fn();
const component = <SideBar onChange={ onChange } language={ lang }/>;

test('renders successfully', () => {
  shallow(component);
});
