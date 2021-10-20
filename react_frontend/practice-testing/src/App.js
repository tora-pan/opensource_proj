import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home_page/Home";
import Flashcards from "./pages/flashcards_page/Flashcards";
import About from "./pages/about_page/About";
import Contact from "./pages/contact_page/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/flashcards" component={Flashcards} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
