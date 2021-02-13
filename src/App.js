import './App.css';
import MainPage from "./pages/Main Page/MainPage"
import SingleHeroPage from "./pages/Single Hero Page/SingleHeroPage"
import {
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/singleHeroPage/:id" component={SingleHeroPage} >
        </Route>
        <Route
          path="/" component={MainPage}>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
