import {useCallback, useEffect, useState} from "react";
import {ExchangeInfoTableApiResponse} from "@components/ExchangeInfoTable/ExchangeInfoTable.types";
import {fetchExchangeTableData} from "@components/ExchangeInfoTable/ExchangeInfoTable.api";
import isEqual from "lodash.isequal";


export const UseCurrenciesInfo = () => {
  const [data, setData] = useState<ExchangeInfoTableApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {Valute, ...rest} = data || {};

  const tableData = Object.values(Valute || {})

  useEffect(() => {
    setLoading(true);
    if (!data?.Valute) {
      fetchExchangeTableData().then((res: ExchangeInfoTableApiResponse) => {
        if (res) {
          setLoading(false)
          setData(res)
        }
      }).catch((error) => {
        if (error) {
          setLoading(false)
          setError(error)
        }
      })
    }
  }, [data]);

  const updateData = useCallback((date?: string | null) => {
    setLoading(true)
    fetchExchangeTableData(date).then((res: ExchangeInfoTableApiResponse) => {
      if (res) {
        setLoading(false)
        setData((prev) => {
          if (isEqual(res, prev)) {
            return prev
          } else return res
        })
      }
    }).catch((error) => {
      if (error) {
        setLoading(false)
        setError(String(error))
      }
    })
  }, [])

  const resetError = () => setError('');

  return {
    error,
    resetError,
    loading,
    actualityData: rest,
    tableData,
    updateData,
  }
}