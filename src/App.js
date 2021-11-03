import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddPackages from './components/AddPackages/AddPackages';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import PlaceOrder from './components/Home/PlaceOrder/PlaceOrder';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import MyOrder from './components/myOder/MyOrder';
import NotFound from './components/NotFound/NotFound';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const PackagesContext = createContext();
function App() {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('https://whispering-harbor-60401.herokuapp.com/packages')
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  return (
    <AuthProvider>
      <PackagesContext.Provider value={packages}>
        <div className='App'>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/addPackages'>
                <AddPackages></AddPackages>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <PrivateRoute path='/placeOrder/:bookId'>
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <PrivateRoute path='/myOrder'>
                <MyOrder></MyOrder>
              </PrivateRoute>
              <PrivateRoute path='/manageOrder'>
                <ManageAllOrders></ManageAllOrders>
              </PrivateRoute>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </PackagesContext.Provider>
    </AuthProvider>
  );
}

export default App;
