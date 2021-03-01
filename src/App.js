import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './components/Main';
import ModelS from "./pages/ModelS";
import Menu from "./components/Menu";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path={["/","/home"]} component={() => <Main isMenuFixed={true} />}></Route>
            <Route exact path="/models" component={() => <ModelS isMenuFixed={false} />}></Route>
            {/* <Route path='/404' component={NotFoundPageComponent} /> */}
            <Redirect from='*' to='/404' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
