import { GlobalStyles } from './styles/GlobalStyles'
import { AppContainer } from './styles/AppContainer'
import { useEffect } from 'react'
import { auth } from './service/auth'

import { BrowserRouter } from "react-router-dom";
import { AlbumContexstProvider } from './contexts/AlbumContext'
import { Router } from './Router'

function App() {

  useEffect(() => {
    const Authenticate = async () => {
      const response = await auth.post('/api/token', { grant_type: `client_credentials` })
      localStorage.setItem('token', response.data.access_token)
    }

    Authenticate()

  }, [])

  return (
    <AppContainer>
      <BrowserRouter>
        <AlbumContexstProvider>
          <Router />
        </AlbumContexstProvider>
      </BrowserRouter>

      <GlobalStyles />
    </AppContainer>
  )
}

export default App
