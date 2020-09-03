import {Reducer} from 'redux';
import {DonateActionInterface, DonateActionType} from './action';

export interface DonateState {
  donate: number;
  message: string;
}

export const DonateReducer: Reducer<DonateState, DonateActionInterface> = (
  state,
  action
) => {
  const _state = state || {
    donate: 0,
    message: '',
  };

  console.log(action, _state);

  switch (action.type) {
    case DonateActionType.UPDATE_TOTAL_DONATE:
      return Object.assign({}, _state, {
        donate: _state.donate + action.amount,
      });
    case DonateActionType.UPDATE_MESSAGE:
      return Object.assign({}, _state, {
        message: action.message,
      });

    default:
      return _state;
  }
};
