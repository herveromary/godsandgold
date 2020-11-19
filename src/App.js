import './App.css';
import Login from '../src/component/Login';
import { Route, Switch } from 'react-router-dom';
import { GGContextProvider } from './Context';

function App() {
  return (
    <div className='App'>
      <h1>GodsAndGold</h1>
      <GGContextProvider>
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </GGContextProvider>
    </div>
  );
}

export default App;
