import {Reducer} from 'redux';
import {DonateActionInterface, DonateActionType} from './action';

export interface DonateState {
  donate: number;
  messages: string[];
}

const initialDonateState: DonateState = {
  donate: 0,
  messages: [],
};

export const DonateReducer: Reducer<DonateState, DonateActionInterface> = (
  state,
  action
) => {
  const _state = state || initialDonateState;

  switch (action.type) {
    case DonateActionType.UPDATE_TOTAL_DONATE:
      return Object.assign({}, _state, {
        donate: _state.donate + action.amount,
      });
    case DonateActionType.UPDATE_MESSAGE:
      return Object.assign({}, _state, {
        messages: [..._state.messages, action.message],
      });
    case DonateActionType.REMOVE_MESSAGE:
      return Object.assign({}, _state, {
        messages: _state.messages.slice(1),
      });
    default:
      return _state;
  }
};
