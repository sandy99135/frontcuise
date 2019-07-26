import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom"
import Login from './components/login'
import Profil from './components/Profil'
import Acceuil from './components/Acceuil'
import Footer from './components/footer'
import Register from './components/register'
// import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
// import setAuthToken from './setAuthtoken';
// import jwt_decode from 'jwt-decode';
// import { setCurrentUser,logoutUser } from './actions/authentificate';

  import store from './store';
// if(localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));

//   const currentTime = Date.now() / 1000;
//   if(decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = '/login'
//   }
// }
  class App extends Component {
   
    render(){
      return (
        <div>
          <Provider store = { store }>
          <Router>
            <nav id="navbar"class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#"><Link  id="titre" to="/"><img  src="Logo.png"  id="logo"/> <span id="titre">Miam Miam </span></Link> <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item active">
                    <div id="login"><Link  id="titre" to="/login">Connecter</Link></div>
                  </li>
                </ul>

              </div>
            </nav>
          
            <Route path="/"  exact component={Acceuil} />
             
            <Route path="/login"  component={Login} />
            { <Route path="/register" exact component={Register} /> }
            <Route path="/profil" component={Profil} />
            {/* <Route path="/NAVBAR" component={Navbar} /> */}
        
            <Footer/>
  {/* <Produit/> */}
 
          </Router>
    
          </Provider>
          
    
    
        </div>
    
    
      );
    }
  
}


export default App;
