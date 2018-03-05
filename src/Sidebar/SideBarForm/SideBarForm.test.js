import React            from 'react';
import {shallow, mount} from 'enzyme';
import SideBarForm      from './SideBarForm';

const onChange = jest.fn();

const langs = ['php', 'html', 'css'];
const lang = langs[1];
const form = shallow(<SideBarForm languages={ langs } language={ lang } onChange={ onChange }/>);

test('it renders successfully', () => {
  shallow(<SideBarForm languages={ langs } language={ lang } onChange={ onChange }/>);
});

test('change if list of languages has been rendered', () => {
  expect(form.find('option').length).toEqual(langs.length);
});

test('check if onChange callback is being called', () => {;
  const option = form.find('select');
  option.simulate('change', {target: {value: 'css'}});
  expect(onChange).toHaveBeenCalled();
});

