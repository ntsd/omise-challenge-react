import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Charity} from '../../types/Charity';
import {SelectAmountComponent} from '../SelectAmountComponent/SelectAmountComponent';

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: React.FC<CharityCardProps> = ({charity}) => {
  const [isSelectingAmount, setIsSelectingAmount] = useState(false);

  const CloseButton = () => (
    <Button
      className="close"
      aria-label="Close"
      style={{position: 'absolute', right: '20px', top: '20px'}}
      onClick={() => {
        setIsSelectingAmount(false);
      }}
    >
      <span aria-hidden="true">&times;</span>
    </Button>
  );

  const DonateButton = () => (
    <Button
      variant="outline-primary"
      onClick={() => {
        setIsSelectingAmount(true);
      }}
    >
      Donate
    </Button>
  );

  return (
    <Card style={{marginBottom: '50px'}}>
      {isSelectingAmount ? (
        <Card.Body style={{height: 'calc(35vh + 63px)', position: 'relative'}}>
          <CloseButton />
          <SelectAmountComponent charity={charity}></SelectAmountComponent>
        </Card.Body>
      ) : (
        <>
          <Card.Img
            variant="top"
            src={charity.image}
            style={{height: '35vh'}}
          />
          <Card.Footer
            className="d-flex justify-content-between"
            style={{backgroundColor: '#fff'}}
          >
            <div>{charity.name}</div>
            <DonateButton />
          </Card.Footer>
        </>
      )}
    </Card>
  );
};
