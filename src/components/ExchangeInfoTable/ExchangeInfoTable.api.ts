import {API, BASE_URL} from "@common/constants";
import {ExchangeInfoTableApiResponse} from "@components/ExchangeInfoTable/ExchangeInfoTable.types";

export const fetchExchangeTableData = async (date?: string | null): Promise<ExchangeInfoTableApiResponse> => {
  const lastDataUrl = `${BASE_URL}${API.EXCHANGE_INFO}`
  const archiveDataUrl = `${BASE_URL}${API.ARCHIVE}/${date}/${API.EXCHANGE_INFO}`
  const url = date ? archiveDataUrl : lastDataUrl
  const response = await fetch(url, {method: 'GET'})
  return response.json()
}