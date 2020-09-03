import React, {useEffect, useState} from 'react';
import {connect, useDispatch, ConnectedProps} from 'react-redux';

import {summaryDonations} from './utils/helpers';
import {DonateState} from './store/donate/reducer';
import {Charity} from './types/Charity';
import {Payment} from './types/Payment';
import {DonateActionType} from './store/donate/action';
import {GetPayments, GetCharities, PostPayment} from './api/API';
import {Container, Row, Col, Alert} from 'react-bootstrap';
import {CharityCardComponent} from './components/CharityCardComponent/CharityCardComponent';
import {HeaderTitleComponent} from './components/HeaderTitleComponent/HeaderTitleComponent';

const connector = connect((state: DonateState) => state);

type PropsFromRedux = ConnectedProps<typeof connector>;
type AppProps = PropsFromRedux & DonateState;

export const App: React.FC<AppProps> = props => {
  const [charities, setCharities] = useState([] as Array<Charity>);
  const dispatch = useDispatch();

  useEffect(() => {
    GetCharities().then((data: Charity[]) => {
      setCharities(data);
    });

    GetPayments().then((data: Payment[]) => {
      dispatch({
        type: DonateActionType.UPDATE_TOTAL_DONATE,
        amount: summaryDonations(
          data.filter(item => item.amount).map(item => item.amount)
        ),
      });
    });
  }, []);

  return (
    <Container>
      <Row>
        <HeaderTitleComponent>Omise Tamboon React</HeaderTitleComponent>
      </Row>
      <p>All donations: {props.donate}</p>
      {props.messages &&
        props.messages.map((message: string) => (
          <Alert variant="primary">{message}</Alert>
        ))}
      <Row>
        {charities.map((charity, i) => (
          <Col md={12} lg={6} key={i}>
            <CharityCardComponent charity={charity}></CharityCardComponent>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default connector(App);
