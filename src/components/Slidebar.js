import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./slide.css"
import Ajoutatelier from './Ajoutatelier';
import MonAtelier from './MonAtelier';
export default class Slidebar extends Component {
    render() {
        return (
          <div>
             <Router>
             <div id="mySidenav" class="sidenav">
                <a href="#"><Link  id="titre" to="/ajout">Ajouter un atelier</Link></a>
                <a href="#"><Link  id="titre" to="/atelier">Liste des Ateliers</Link></a>
               
              </div>
              
              <div class="main">
              <Route path="/atelier" component={MonAtelier} />
              <Route path="/profil" component={MonAtelier} />
              <Route path="/ajout" component={Ajoutatelier} />
              </div>
            
             </Router>
              
          </div>

        )
    }
}
