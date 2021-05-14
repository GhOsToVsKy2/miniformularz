import './App.css';
import React, { Component } from 'react';
import {  Switch, Route, Link, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Quiz = lazy(()=> import ('./components/Quiz.js'));
const QuizWynik = lazy(()=> import ('./components/QuizWynik.js'));
const CarDetails = lazy(() => import('./components/CarDetails.js'));
// const Login = lazy(() => import('./Login'));
const Home = lazy(() => import('./Home'));
// const Register = lazy(() => import('./Register'));

function App() {

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Suspense fallback="Loading">
        <h2>Navigation bar</h2>
        <div className="nav">
          <Link to="/"> Home </Link>
          <Link to="/quiz"> quiz </Link>
          <Link to="/login"> Login </Link>
        </div>
        <Switch className="content" location={location || background}>
          <Route exact path="/" children={<Home/>}/>
          <Route path="/quiz" children={<Quiz/>}/>
          <Route path="/quiz-wynik" children={ <QuizWynik/> }/>
          <Route path="/car-details" children={<CarDetails />} />
          {/* <Route path="/login" component={<Login/>}/>
          <Route path="/register" component={<Register/>}/> */}
        </Switch>
    </Suspense>
  //   <Suspense fallback='Ladowanie' >

  //     <Switch location={location || background} >

  //     </Switch>


  //   </Suspense>
  );
}
export default App