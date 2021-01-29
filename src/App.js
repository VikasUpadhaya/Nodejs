import LandingPage from './components/landingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import MainPage from './components/mainPage'
import sellingvehicle from './components/sellingvehicle';
import AboutUs from './components/aboutUs';
import Forums from './components/forums';
import SelectCar from './components/selectCar';
import './App.css'

export default function App() {
  return (
    <div className="App ">
     
      <BrowserRouter>
     
        <Switch>
          <Route exact path="/" component={LandingPage}  />
          <Route exact path="/main-page" component={MainPage}  />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/seller-page" component={sellingvehicle} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/forums" component={Forums} />
          <Route exact path="/select-car" component={SelectCar} />
        </Switch>
      </BrowserRouter>
      
   
    </div>
  );
}


