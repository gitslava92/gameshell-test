import {
  ExchangeInfoTableApiResponse
} from "@components/ExchangeInfoTable/ExchangeInfoTable.types";

export interface ActualityInfoProps {
  data: Omit<ExchangeInfoTableApiResponse, 'Valute'>
  updateData: (date?: string | null) => void;
}