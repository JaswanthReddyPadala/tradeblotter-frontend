export interface ISecurities {
  Days: number;
  TradeDate: string;
  TranType: TransactionType;
  MngrCode: string;
  Ticker: string;
  Name: string;
  CUSIP: string;
  MaturityDate: string;
  Yield: string;
  CUR: CurrencyType;
  Portfolio: string;
  Quantity: number;
  Trader: string;
  Strategy: string;
  DUSCode: string;
  Reason: string;
  FlagComment: string;
  Note: string;
  IsApproved: boolean;
  IsFlagged: boolean;
}

export enum TransactionType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum CurrencyType {
  USD = 'USD',
  EUR = 'EUR',
  INR = 'INR',
}
