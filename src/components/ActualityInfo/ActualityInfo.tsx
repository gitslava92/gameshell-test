import {Button, Typography} from "@mui/material";
import {ActualityInfoProps} from "@components/ActualityInfo/ActualityInfo.types";
import {DateTimePicker, FlexBox, RootBox} from "@components/ActualityInfo/ActualityInfo.styles";
import dayjs, {Dayjs} from "dayjs";
import {useState} from "react";


export const ActualityInfo = ({data, updateData}: ActualityInfoProps) => {
  const [date, setDate] = useState<Dayjs | null>(null);

  const handleChange = (value: Dayjs | null) => {
    setDate(value);
  };

  return (
    <RootBox>
      <FlexBox>
        <Typography>Актуальность:</Typography>
        <Typography>{dayjs(data?.Timestamp).format('DD.MM.YYYY HH:mm')}</Typography>
      </FlexBox>

      <FlexBox>
        <DateTimePicker
          value={date}
          onChange={handleChange}
          views={['year', 'month', 'day']}
          disableFuture
        />
        <Button
          variant="contained"
          onClick={() => updateData(date ? date.format('YYYY/MM/DD') : null)}
        >
          Обновить
        </Button>
      </FlexBox>
    </RootBox>
  )
}