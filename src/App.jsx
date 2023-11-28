import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainView from "./components/MainView";
import PostMessage from "./components/PostMessage";
import EmptyState from "./components/EmptyState";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainView} />
          <Route path="/post" component={PostMessage} />
          <Route path="/empty" component={EmptyState} />
          // Add more routes as needed
        </Switch>
      </div>
    </Router>
  );
}

export default App;
