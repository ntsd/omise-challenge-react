import React from 'react';
import {Form} from 'react-bootstrap';

interface AmountRadioGroupComponentProps {
  selectedAmount: number;
  setSelectedAmount: React.Dispatch<React.SetStateAction<number>>;
}

export const AmountRadioGroupComponent: React.FC<AmountRadioGroupComponentProps> = ({
  selectedAmount,
  setSelectedAmount,
}) => {
  const donateList = [10, 20, 50, 100, 500];

  return (
    <div>
      {donateList.map((amount, index) => (
        <Form.Check
          inline
          type="radio"
          label={amount}
          value={amount}
          checked={selectedAmount === amount}
          key={'radio-' + index}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedAmount(parseInt(event.target.value));
          }}
        />
      ))}
    </div>
  );
};
