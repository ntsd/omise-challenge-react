import {createStore, Store} from 'redux';
import {DonateReducer, DonateState} from './reducer';

export const DonateStore: Store<DonateState> = createStore(DonateReducer);
