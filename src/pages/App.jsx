import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Header from "./Header";
import Navbar from "../components/Navbar";

// Pages
import Cards from './Cards';
import Buttons from "./Buttons";
import Forms from "./Forms";
import Login from "./Login";
import Other from "./Other";

export default function App() {
  return (
    <Router>
      <div>
        {/*<Header />*/}

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/buttons">
            <Buttons />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
