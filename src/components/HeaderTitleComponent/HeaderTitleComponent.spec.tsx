import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import {HeaderTitleComponent} from './HeaderTitleComponent';

it('renders correctly', () => {
  const tree = renderer.create(<HeaderTitleComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
