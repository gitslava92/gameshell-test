import {CandidateInfo} from "@components/CandidateInfo";
import {Box, Snackbar} from "@mui/material";
import {ExchangeInfoTable} from "@components/ExchangeInfoTable";
import {ActualityInfo} from "@components/ActualityInfo";
import {UseCurrenciesInfo} from "@components/CurrenciesInfo/useCurrenciesInfo";

export const CurrenciesInfo = () => {
  const {
    error,
    resetError,
    actualityData,
    tableData,
    updateData,
  } = UseCurrenciesInfo()

  return (
    <Box p={3}>
      <CandidateInfo/>
      <ActualityInfo data={actualityData} updateData={updateData}/>
      <ExchangeInfoTable data={tableData}/>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={resetError}
        message={error}
      />
    </Box>
  )
}
