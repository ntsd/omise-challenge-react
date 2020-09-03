export enum DonateActionType {
  UPDATE_TOTAL_DONATE = 'UPDATE_TOTAL_DONATE',
  UPDATE_MESSAGE = 'UPDATE_MESSAGE',
  REMOVE_MESSAGE = 'REMOVE_MESSAGE',
}
export type DonateAction = DonateActionType;

export interface DonateActionInterface {
  type: DonateAction;
  amount: number;
  message: string;
}
