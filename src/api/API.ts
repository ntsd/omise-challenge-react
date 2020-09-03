import {Charity} from './../types/Charity';
import {Payment} from './../types/Payment';
import axios from 'axios';

const BACKEND_API = 'http://localhost:3001';

export const GetCharities = async () => {
  const result = await axios.get(`${BACKEND_API}/charities`);
  return result.data as Charity[];
};

export const GetPayments = async () => {
  const result = await axios.get(`${BACKEND_API}/payments`);
  return result.data as Payment[];
};

export const PostPayment = async (payment: Payment) => {
  const result = await axios.post(`${BACKEND_API}/payments`, payment);
  return result.data as Payment;
};
