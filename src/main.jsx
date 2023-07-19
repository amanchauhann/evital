import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react'
import { DataProvider } from './Contexts/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-k8wih0mdid0n6u7s.us.auth0.com"
      clientId="BHlNy8oB7H7CscM1ZuWnySMG4CHAgJiE"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <DataProvider>
        <Router>
          <ChakraProvider>
            <App />
          </ChakraProvider>

        </Router>
      </DataProvider>

    </Auth0Provider>


  </React.StrictMode>,
)
