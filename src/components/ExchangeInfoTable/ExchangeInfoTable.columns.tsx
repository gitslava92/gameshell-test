import {ColumnDef} from "@tanstack/react-table";
import {ExchangeInfoValuteItemInfo} from "@components/ExchangeInfoTable/ExchangeInfoTable.types";
import {Box} from "@mui/material";
import {HorizontalRule, TrendingDown, TrendingUp} from "@mui/icons-material";

const growthIcons = {
  up: <TrendingUp color="success"/>,
  stable: <HorizontalRule color="disabled"/>,
  down: <TrendingDown color="error"/>,
}

const getIconKey = (currentValue: number, prevValue: number) => {
  if (currentValue > prevValue) {
    return 'up'
  } else if (currentValue < prevValue) {
    return 'down'
  } else return 'stable'
}

export const columns: ColumnDef<ExchangeInfoValuteItemInfo>[] = [
  {
    header: 'ID',
    accessorKey: 'ID',
  },
  {
    header: 'NumCode',
    accessorKey: 'NumCode',
  },
  {
    header: 'CharCode',
    accessorKey: 'CharCode',
  },
  {
    header: 'Nominal',
    accessorKey: 'Nominal',

  },
  {
    header: 'Name',
    accessorKey: 'Name',
  },
  {
    header: 'Value',
    accessorKey: 'Value',
  },
  {
    header: 'Previous',
    accessorKey: 'Previous',
  },
  {
    id: 'dynamic',
    header: 'Dynamics',
    accessorKey: 'Previous',
    cell: ({getValue, row}) => (
      <Box component="span">
        {growthIcons[getIconKey(Number(getValue()), Number(row?.original?.Value))]}
      </Box>
    )
  },
]