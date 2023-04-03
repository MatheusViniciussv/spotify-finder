import { Home } from './app/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { AppContainer } from './styles/AppContainer'
import { useEffect } from 'react'
import { auth } from './service/auth'
import { api } from './service/api'

function App() {

  useEffect(() => {
    const Authenticate = async () => {
      const response = await auth.post('/api/token', { grant_type: `client_credentials` })
      localStorage.setItem('token', response.data.access_token)
      // api.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`
    }

    Authenticate()

  }, [api.defaults.headers.token])

  return (
    <AppContainer>
      <Home />

      <GlobalStyles />
    </AppContainer>
  )
}

export default App
