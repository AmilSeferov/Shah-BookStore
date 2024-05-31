import './App.css'
import { Nav } from './nav/nav'
import { Home } from './homePage/home'
import { Route, Routes } from 'react-router-dom'
import { About } from './About/about'
import { Account } from './Account/account'
import { Provider } from 'react-redux'
import { store } from './store/state'
import { Orders } from './Orders/orders'
function App() {

  return (
    <>
    <Provider store={store}>
     <Nav/>
     
     <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/About" element={<About/>}></Route>
     <Route path="/Orders" element={<Orders/>}></Route>
     <Route path="/Account" element={<Account/>}></Route>
  </Routes>
  </Provider>
  
    </>
  )
}

export default App
