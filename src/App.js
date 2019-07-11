import React from 'react';
import './App.css';
import Shop from './Shop'
import About from './About'
import Nav from './Nav'
import ItemDetail from './ItemDetail'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Router = gives you the ability to handle routing, wrap all your components that you want routing functionality with Router

//Route = renders out component base on the URL 

//Switch = stops the process of going through all the routes as soon as it finds a url that matches it will show only that component 

//When you have a slash "/" route add "exact" so that the app will not render out both components 



function App() {
  return (
    <Router>
   <div>
     <Nav/>
     <Switch>
     <Route path="/" exact component={home}/>
     <Route path="/about" component={About}/>
     <Route path="/shop" exact component={Shop}/>
     <Route path="/shop/:id" component={ItemDetail}/>
     </Switch>
   </div>
   </Router>
  );
}

const home = () => {
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
