import './acceuil.css'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import Modal from './modal';
import React, { Component } from 'react'
import "./foot.css"
export default class Footer extends Component {
 
    render() {
        
        return (
            
              <div id="DD">
    
    <div id ="foot"class="container-fluid">
      

        
      
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p class="h6">@copyright Sandiarivelo.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
        </div>
         <hr></hr>
      </div>  
    </div>
      </div>
              
            
        )
    }
}
