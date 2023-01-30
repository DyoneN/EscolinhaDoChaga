import "./App.css"
import HomePage from "../src/pages/home/HomePage"
import Album from "../src/pages/album/Album"
import Category from "../src/pages/category/Category"
import Galery from "../src/pages/galery/Galery"
import Add_Photos from "../src/pages/add_photos/Add_Photos"
import Login from "../src/pages/login/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"

//import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Album' component={Album} />
          <Route exact path='/Category' component={Category} />
          <Route exact path='/Galery' component={Galery} />
          <Route exact path='/Add_Photos' component={Add_Photos} />
          <Route exact path='/Login' component={Login} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
        </Switch>
        
      </Router>
    </>
  )
}

export default App
