import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './App'
import Logo from './components/Logo';
import { Landing } from './pages/landing'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { store } from './services/store'


const Routing = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='landing' element={<Landing />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>
)
