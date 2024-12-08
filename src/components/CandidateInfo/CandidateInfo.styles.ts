import {Box, Link as MUILink, styled, Typography} from "@mui/material";

export const RootBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  adding: theme.spacing(2, 0),
  marginBottom: theme.spacing(3)
}));

export const Title = styled(Typography)(({theme}) => ({
  fontWeight: 700,
  fontSize: 24,
  marginBottom: theme.spacing(2)
}));

export const SubTitle = styled(Typography)(({theme}) => ({
  fontWeight: 500,
  fontSize: 18,
  marginBottom: theme.spacing(2)
}));

export const Text = styled(Typography)(({theme}) => ({
  fontWeight: 400,
  fontSize: 16,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  whiteSpace: 'pre-line',
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
}));

export const ContactsBox = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  flexWrap: 'wrap',
  [theme.breakpoints.up('sm')]: {
    flexWrap: 'nowrap',
    gap: theme.spacing(2),
  }
}));

export const Link = styled(MUILink)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  width: '100%',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));