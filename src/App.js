import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
