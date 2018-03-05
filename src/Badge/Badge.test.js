import React from 'react';
import { shallow } from 'enzyme';
import { Briefcase } from 'react-feather';
import renderer from 'react-test-renderer';

import Badge from './Badge';

test('it should render', () => {
  shallow(<Badge text="Hello there" />);
});

test('it should render props', () => {
  const badge = shallow(<Badge color="red" fontSize="22" icon={<Briefcase />} text="Following" />);
  expect(badge.hasClass('red')).toEqual(true);
  expect(badge.props().style).toEqual({ fontSize: '22px' });
  expect(badge.containsMatchingElement(<Briefcase />));
  expect(badge.text()).toEqual('<Briefcase />Following');
});

test('it should render', () => {
  const badge = renderer.create(<Badge color="red" fontSize="22" icon={<Briefcase />} text="Following" />);
  const tree = badge.toJSON();
  expect(tree).toMatchSnapshot();
});

test('it should throw error when text is omitted', () => {
  expect(() => renderer.create(<Badge />)).toThrowError();
});

