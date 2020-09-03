import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import {AmountRadioGroupComponent} from './AmountRadioGroupComponent';

it('renders correctly', () => {
  const TestElement = () => {
    const [selectedAmount, setSelectedAmount] = useState(10);
    return (
      <AmountRadioGroupComponent
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
      ></AmountRadioGroupComponent>
    );
  };

  const tree = renderer.create(<TestElement />).toJSON();
  expect(tree).toMatchSnapshot();
});
