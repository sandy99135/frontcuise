import React, { Component } from 'react'
import './acceuil.css'

import axios from 'axios';
import MonAtelier from "./MonAtelier"
import Ajoutatelier from "./Ajoutatelier"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import Modal from './modal';
export default class Acceuil extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            profil: [],
            nom:"",
            prenom:"",
            email:"",
            telephone:""
        };
        this.handleChange = this.handleChange.bind(this);
  
    }
    componentDidMount() {
        
        axios.get("http://localhost:80https://sandycuis.herokuapp.com/atelier").then(res => {
           
            this.setState({ profil: res.data })
            console.log(this.state.profil)
  
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
      
        
        return (
            
              <div id="DD">
             <div id="desc">
           <img  src="chef.png"  id="chef"/> <br></br>
            <p>Retrouvez nos meilleurs recettes de cuisine <br></br> </p>
            
           </div>
            <div id="descript">
                <p>Nos cibles sont les jeunes actifs entre 25 - 35 ans. Des personnes qui veulent apprendre à
cuisiner afin de manger correctement. </p>
           {this.state.profil.length>0 ?(this.state.profil.filter(pro=>pro.visibilite==true).map(prof=>{
            console.log(prof.image)
         var url="https://sandycuis.herokuapp.com/public/"+prof.image
      return(
  <div id="atelier"> 
      <div id="imag"> <img src={url} id="larg"/></div>
      <div class=" cardbody card-body">
             <h2 class="card-title">{prof.titre}</h2>
             <p class="card-text"><strong>Description :</strong> :{prof.description}</p>
             <p class="card-text"><strong>Date</strong>{prof.date}</p>
             <p class="card-text"><strong>Horaire :</strong>{prof.horaire}</p>
             <p class="card-text"><strong>Place Disponible :</strong>{prof.placedispo}</p>
             <p class="card-text"><strong>Place Reserve :</strong>{prof.placereserve}</p>
             <a href="#" ><strong>Prix :</strong>{prof.prix}</a><br></br>
             <button class=" inscr btn btn-primary" onClick={()=>{
                //  axios.post("http://localhost:8080/particulier/"+prof._id)
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div id="confirm2" className='custom-ui'>
                            <h2 class="card-title card-title2"> Inscription pour {prof.titre}</h2>
                        <input id="input" name="nom" onChange={ this.handleChange } placeholder="Entrer votre nom" value={this.state.value}/><br/>
                        <input  id="input" name="prenom" onChange={ this.handleChange }  placeholder="Entrer votre prenom"v alue={this.state.value}/><br/>
                        <input   id="input" name="email" onChange={ this.handleChange } placeholder="Entrer votre email" value={this.state.value}/><br/>
                         <input  id="input" name="telephone" onChange={ this.handleChange } placeholder="Entrer votre numero telephone"/><br/>
                          <button  className=" btn btn-secondary BOU1"onClick={onClose}>Fermer</button>
                          <button
                            onClick={() => {
                                axios.post("http://localhost:8080/particulier/"+prof._id,{
                                    nom:this.state.nom,
                                    prenom:this.state.prenom,
                                    email:this.state.email,
                                    telephone:this.state.telephone
                                }).then(res=>{
                                  axios.get("http://localhost:8080/atelier").then(res => {
           
            this.setState({ profil: res.data })
            console.log(this.state.profil)
  
        })
                                  console.log(res.data);
                                })
                              onClose();
                            }}
                          className="btn btn-success">
                          Participer
                          </button>
                        </div>
                      );
                    }
                  });
                 }}  className="  btn BOU1" >S'inscrire</button>
  </div > 
      
     </div>
      )})):""} 
           </div>
           <div id="desc2">
           
           </div>

        <div className="fond"> 
            <img  src="cuisine1.jpg"  id="imgfond"/>
        </div>
    </div>
              
            
        )
    }
}
