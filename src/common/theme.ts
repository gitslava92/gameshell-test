import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
      mode: 'dark',
      divider: '#5b5b5b'
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--space-sm)',
            backgroundColor: 'var(--color-main-bg)',
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--space-sm)',
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--space-sm)',
            backgroundColor: 'var(--color-bg)',
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid var(--color-table-border)`,
            backgroundColor: 'var(--color-table-body-bg)',
            '&:last-child td, &:last-child th': { border: 0 },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: 'var(--font-sm)',
            color: 'var(--color-white)',
          },
          head: {
            color: 'var(--color-table-head-text)',
            backgroundColor: 'var(--color-table-head-bg)',
          },
          body: {
            fontSize: 'var(--font-smm)',
            color: 'var(--color-table-body-text)',
            backgroundColor: 'transparent',
            borderBottom: `1px solid var(--color-border)`,
          },
        },
      },
    },
  });