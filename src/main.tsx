import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './App'
import {ThemeProvider} from "@mui/material";
import {theme} from "@common/theme";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="ru">
        <App/>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>,
)
