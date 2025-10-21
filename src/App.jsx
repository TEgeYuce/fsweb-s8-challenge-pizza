import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import OrderResult from './pages/OrderResult'
import UsteKaydir from './components/UsteKaydir'

function App() {
  
  return (
    <>
    <UsteKaydir />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path ="/OrderPage">
          <OrderPage />
        </Route>
        <Route path ="/OrderResult">
          <OrderResult />
        </Route>
        
      </Switch>
    </>
  )
}

export default App