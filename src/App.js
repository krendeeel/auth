import Main from './components/Main';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Preloader } from './components/preloader/Preloader';
import { Error } from './components/Error';


function App() {
  const preloader = useSelector(state => state.authReducer.preloader);
  const error = useSelector(state => state.authReducer.error);
  
  return (
    <div className='app'>
      {error && <Error error={error}/>}
      {preloader && <Preloader/>}
      {!preloader && <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={()=><Main/>}/>
            <Route path="/registration" render={()=><Registration/>}/>
            <Route path="/login" render={()=><Login/>}/>
          </Switch>
        </div>
      </BrowserRouter>}
    </div>
    
    
  );
}

export default App;
