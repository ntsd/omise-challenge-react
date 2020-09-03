import React, {useEffect, useState} from 'react';
import {connect, useDispatch, ConnectedProps} from 'react-redux';

import {summaryDonations} from './utils/helpers';
import {DonateState} from './store/donate/reducer';
import {Charity} from './types/Charity';
import {Payment} from './types/Payment';
import {DonateActionType} from './store/donate/action';
import {GetPayments, GetCharities, PostPayment} from './api/API';
import {Container, Row} from 'react-bootstrap';
import {CharityCard} from './components/CharityCard/CharityCard';

const mapState = (state: DonateState) => ({
  donate: state.donate,
  message: state.message,
});

const connector = connect(mapState);

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

  const style: React.CSSProperties = {
    color: 'red',
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  };

  return (
    <Container>
      <Row>
        <h1>Tamboon React</h1>
      </Row>
      <p>All donations: {props.donate}</p>
      <p style={style}>{props.message}</p>
      <Row>
        {charities.map((charity, i) => (
          <CharityCard charity={charity} key={i}></CharityCard>
        ))}
      </Row>
    </Container>
  );
};

export default connector(App);
