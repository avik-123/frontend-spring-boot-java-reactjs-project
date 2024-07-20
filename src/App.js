
import './App.css';
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return ( 
    <div>
      <Router>
      <HeaderComponent />
      <div className='container'>
      <Routes>
        <Route path ='/' Component = {ListEmployeeComponent}></Route>
        <Route path ='/employees' Component = {ListEmployeeComponent}></Route>
        <Route path ='/add-employee' Component = {AddEmployeeComponent}></Route>
        <Route path='/edit-employee/:id' Component= {AddEmployeeComponent}></Route>

      </Routes>
      </div>
      <FooterComponent /> 
      </Router>
    </div>
  );
}

export default App;
