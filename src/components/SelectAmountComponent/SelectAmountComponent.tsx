import React, {useState} from 'react';
import {Card, Button, Row, Container, Col} from 'react-bootstrap';
import {Charity} from '../../types/Charity';
import {PostPayment} from '../../api/API';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

interface SelectAmountComponentProps {
  charity: Charity;
}

export const SelectAmountComponent: React.FC<SelectAmountComponentProps> = ({
  charity,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const dispatch = useDispatch();

  const paymentRadio = [10, 20, 50, 100, 500].map((amount, j) => (
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

  const SelectAmountContainer = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const SelectAmountRow = styled.div`
    line-height: 1.5;
    vertical-align: middle;
  `;

  return (
    <SelectAmountContainer>
      <SelectAmountRow>{charity.name}</SelectAmountRow>
      <SelectAmountRow>{paymentRadio}</SelectAmountRow>
      <SelectAmountRow>
        <Button
          variant="outline-primary"
          onClick={() => {
            handlePay(charity.id, selectedAmount, charity.currency);
          }}
        >
          Pay
        </Button>
      </SelectAmountRow>
    </SelectAmountContainer>
  );
};
