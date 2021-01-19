import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users.jsx";
import NewPlace from "./places/pages/NewPlace.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Users} />
        <Route path='/places/new' exact component={NewPlace} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
