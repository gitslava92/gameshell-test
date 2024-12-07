import {ContactsBox, Link, SubTitle, Text, Title, RootBox} from "@components/CandidateInfo/CandidateInfo.styles";
import {Email, GitHub, Language, Telegram} from "@mui/icons-material";
import {Box} from "@mui/material";


export const contacts = [
  {
    icon: <Telegram/>,
    label: "webslava92",
    link: "https://t.me/webslava92",
  },
  {
    icon: <Email/>,
    label: "webslava92@gmail.com",
    link: "mailto:webslava92@gmail.com",
  },
  {
    icon: <Language/>,
    label: "gitslava92.github.io",
    link: "https://gitslava92.github.io/portfolio/",
  }
]

export const CandidateInfo = () => {
  return (
    <RootBox>
      <Title>Пустовит Вячеслав</Title>
      <Text>
        {'Frontend - разработчик с 4-летним опытом работы. \nИщу интересные задачи и возможности для профессионального роста.'}
      </Text>
      <ContactsBox>
        {contacts.map((contact) => (
          <Link href={contact.link} key={contact.link}>
            {contact.icon}
            <Box component="span">{contact.label}</Box>
          </Link>
        ))}
      </ContactsBox>
      <SubTitle>Тестовое задание</SubTitle>
      <Link href={'https://github.com/gitslava92/gameshell-test'} sx={{justifyContent: 'center'}}>
        <GitHub/>
        <Box component="span">GitHub repository</Box>
      </Link>
    </RootBox>
  )
}