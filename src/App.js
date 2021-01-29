import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import Home from "./Home";
import NotFound404 from "./NotFound404";

function App() {
  return (
    <Router>
      <Navbars title="Ujian Juara Coding Minggu Ke - 3" />
      <Container className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
