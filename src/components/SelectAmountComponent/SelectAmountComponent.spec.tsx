import React from 'react';
import renderer from 'react-test-renderer';
import {SelectAmountComponent} from './SelectAmountComponent';
import {DonateStore} from '../../store/donate/store';
import {Provider} from 'react-redux';

it('renders correctly', () => {
  const TestElement = () => {
    return (
      <Provider store={DonateStore}>
        <SelectAmountComponent
          charity={{
            id: 1,
            name: 'test',
            image: 'image',
            currency: 'USD',
          }}
        ></SelectAmountComponent>
      </Provider>
    );
  };

  const tree = renderer.create(<TestElement />).toJSON();
  expect(tree).toMatchSnapshot();
});
