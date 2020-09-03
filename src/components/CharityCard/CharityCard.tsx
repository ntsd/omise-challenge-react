import React, {useState} from 'react';
import {Card} from '../Card/Card';
import {Charity} from '../../types/Charity';
import {PostPayment} from '../../api/API';
import {useDispatch} from 'react-redux';

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: React.FC<CharityCardProps> = ({charity}) => {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const dispatch = useDispatch();

  const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j}>
      <input
        type="radio"
        name="payment"
        onClick={() => {
          setSelectedAmount(amount);
        }}
      />{' '}
      {amount}
    </label>
  ));

  const handlePay = (id: number, amount: number, currency: string) => {
    PostPayment({charitiesId: id, amount: amount, currency: currency}).then(
      function () {
        dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });
        setTimeout(function () {
          dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          });
        }, 2000);
      }
    );
  };

  return (
    <Card>
      <p>{charity.name}</p>
      {payments}
      <button
        onClick={() => {
          handlePay(charity.id, selectedAmount, charity.currency);
        }}
      >
        Pay
      </button>
    </Card>
  );
};
