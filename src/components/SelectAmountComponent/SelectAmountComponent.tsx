import React, {useState} from 'react';
import {Card, Button, Row, Container, Col} from 'react-bootstrap';
import {Charity} from '../../types/Charity';
import {PostPayment} from '../../api/API';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {AmountRadioGroupComponent} from '../AmountRadioGroupComponent/AmountRadioGroupComponent';
import {DonateActionType} from '../../store/donate/action';

interface SelectAmountComponentProps {
  charity: Charity;
}

export const SelectAmountComponent: React.FC<SelectAmountComponentProps> = ({
  charity,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const dispatch = useDispatch();

  const handlePay = () => {
    PostPayment({
      charitiesId: charity.id,
      amount: selectedAmount,
      currency: charity.currency,
    }).then(function () {
      dispatch({
        type: DonateActionType.UPDATE_TOTAL_DONATE,
        amount: selectedAmount,
      });
      dispatch({
        type: DonateActionType.UPDATE_MESSAGE,
        message: `Thanks for donate ${selectedAmount}!`,
      });
      setTimeout(() => {
        dispatch({
          type: DonateActionType.REMOVE_MESSAGE,
        });
      }, 2000);
    });
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
    padding-top: 10px;
  `;

  return (
    <SelectAmountContainer>
      <SelectAmountRow>Select the amount to donate (USD)</SelectAmountRow>
      <SelectAmountRow>
        <AmountRadioGroupComponent
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
        ></AmountRadioGroupComponent>
      </SelectAmountRow>
      <SelectAmountRow>
        <Button variant="outline-primary" onClick={handlePay}>
          Pay
        </Button>
      </SelectAmountRow>
    </SelectAmountContainer>
  );
};
