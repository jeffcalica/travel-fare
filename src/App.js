import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About"
import Gallery from "./components/gallery/Gallery"
import Destinations from "./components/Destinations/Home"

function App() {
  return (
    <>
       <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/gallery' exact component={Gallery}></Route>
          <Route path='/destination' exact component={Destinations}></Route>
        </Switch>
       </Router>
    </>
  )
}

export default App
