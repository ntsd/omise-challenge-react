import React from 'react';
import renderer from 'react-test-renderer';
import {CharityCardComponent} from './CharityCardComponent';
import {DonateStore} from '../../store/donate/store';
import {Provider} from 'react-redux';

it('renders correctly', () => {
  const TestElement = () => {
    return (
      <Provider store={DonateStore}>
        <CharityCardComponent
          charity={{
            id: 1,
            name: 'test',
            image: 'image',
            currency: 'USD',
          }}
        ></CharityCardComponent>
      </Provider>
    );
  };

  const tree = renderer.create(<TestElement />).toJSON();
  expect(tree).toMatchSnapshot();
});
