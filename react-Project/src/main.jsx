import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContext from './context/MyContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './ReduxToolKit-Store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <MyContext>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    </MyContext>
  </StrictMode>,
)

//this my main Component which can be render on the browser
