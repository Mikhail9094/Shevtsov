export interface IData {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: Valute;
}

export interface Valute {
  AUD: Currency;
  AZN: Currency;
  GBP: Currency;
  AMD: Currency;
  BYN: Currency;
  BGN: Currency;
  BRL: Currency;
  HUF: Currency;
  VND: Currency;
  HKD: Currency;
  GEL: Currency;
  DKK: Currency;
  AED: Currency;
  USD: Currency;
  EUR: Currency;
  EGP: Currency;
  INR: Currency;
  IDR: Currency;
  KZT: Currency;
  CAD: Currency;
  QAR: Currency;
  KGS: Currency;
  CNY: Currency;
  MDL: Currency;
  NZD: Currency;
  NOK: Currency;
  PLN: Currency;
  RON: Currency;
  XDR: Currency;
  SGD: Currency;
  TJS: Currency;
  THB: Currency;
  TRY: Currency;
  TMT: Currency;
  UZS: Currency;
  UAH: Currency;
  CZK: Currency;
  SEK: Currency;
  CHF: Currency;
  RSD: Currency;
  ZAR: Currency;
  KRW: Currency;
  JPY: Currency;
}

export interface Currency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}
