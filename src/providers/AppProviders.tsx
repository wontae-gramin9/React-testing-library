import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  // The intention is, it is for any possible providers for ContextAPI, Redux, AuthProvder etc.
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
