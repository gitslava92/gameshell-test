import {Box, styled} from "@mui/material";
import {DateTimePicker as MUIDateTimePicker, DateTimePickerProps} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";

export const RootBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing(2, 0),
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-between',
  }
}));

export const FlexBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const DateTimePicker = styled(MUIDateTimePicker)<DateTimePickerProps<Dayjs> & { value: Dayjs | null }>(({theme}) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.primary.contrastText,
    '& .MuiInputAdornment-root': {
      button: {
        svg: {
          fill: theme.palette.divider
        }
      }
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.divider,
  },
}));
