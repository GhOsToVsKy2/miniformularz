import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const About = lazy(()=> import ('./About'));
const Login = lazy(() => import('./Login'));
const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./Register'));

function App() {

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    // <Suspense fallback="Loading">
    //   <Router>
    //     <h2>Navigation bar</h2>
    //     <div className="nav">
    //       <div className='comp'><Link to="/">Home</Link></div>
    //       <div className='comp'><Link to="/about">About</Link></div>
    //       <div className='comp'><Link to="/login">Login</Link></div>
    //     </div>
    //     <Switch className="content" location={location || background}>
    //       <Route exact path="/" component={<Home/>}/>
    //       <Route path="/about" component={<About/>}/>
    //       <Route path="/login" component={<Login/>}/>
    //       <Route path="/register" component={<Register/>}/>
    //     </Switch>
    //   </Router>
    // </Suspense>
    <Suspense fallback='Ladowanie' >

      <Switch location={location || background} >

      </Switch>


    </Suspense>
  );
}

export default App
