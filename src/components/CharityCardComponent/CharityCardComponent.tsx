import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Charity} from '../../types/Charity';
import {SelectAmountComponent} from '../SelectAmountComponent/SelectAmountComponent';

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: React.FC<CharityCardProps> = ({charity}) => {
  const [isSelectedAmount, setIsSelectedAmount] = useState(false);

  return (
    <Card style={{marginBottom: '50px'}}>
      {isSelectedAmount ? (
        <Card.Body style={{height: 'calc(35vh + 63px)', position: 'relative'}}>
          <Button
            className="close"
            aria-label="Close"
            style={{position: 'absolute', right: '20px', top: '20px'}}
            onClick={() => {
              setIsSelectedAmount(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </Button>
          <SelectAmountComponent charity={charity}></SelectAmountComponent>
        </Card.Body>
      ) : (
        <>
          <Card.Img
            variant="top"
            src={charity.image}
            style={{height: '35vh'}}
          />
          <Card.Footer className="d-flex justify-content-between">
            <div>{charity.name}</div>
            <Button
              variant="outline-primary"
              onClick={() => {
                setIsSelectedAmount(true);
              }}
            >
              Donate
            </Button>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};
