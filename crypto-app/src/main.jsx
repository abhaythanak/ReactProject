import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider, theme} from "@chakra-ui/react"
import { ColorModeScript } from "@chakra-ui/color-mode";
import Theme from './Components/Theme.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)

export const server = `https://api.coingecko.com/api/v3`;