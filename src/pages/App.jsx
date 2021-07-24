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
import Other from "./Other/Other";

export default function App() {
  return (
    <Router>
      <div>
        {/*<Header />*/}

        <Navbar />

        <Switch>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/buttons">
            <Buttons />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
          <Route path="/">
            <Cards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
