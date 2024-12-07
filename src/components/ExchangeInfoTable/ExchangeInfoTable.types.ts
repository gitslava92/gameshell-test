export interface ExchangeInfoValuteItemInfo {
  ID?: string;
  NumCode?: string;
  CharCode?: string;
  Nominal?: number;
  Name?: string;
  Value?: number;
  Previous?: number;
}

export type ExchangeInfoValuteItem = Record<string, ExchangeInfoValuteItemInfo>

export interface ExchangeInfoTableApiResponse {
  Date?: string,
  PreviousDate?: string,
  PreviousURL?: string,
  Timestamp?: string,
  Valute?: ExchangeInfoValuteItem;
}

export interface ExchangeInfoTableProps {
  data: ExchangeInfoValuteItemInfo[];
}