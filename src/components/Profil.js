import React, { Component } from 'react'
import axios from "axios"
import { BrowserRouter as  Redirect, Link , withRouter,Router, Route } from "react-router-dom"
import "./slide.css"
import Ajoutatelier from './Ajoutatelier';
import MonAtelier from './MonAtelier';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from'../actions/authentificate';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Slidebar from "./Slidebar"
 class Profil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom:"",
            titre:"",
            description:"",
            horaire:"",
            duree:"",
            date:"",
            placedispo:"",
            placereserve:"",
            prix:"",
            image: '',
            redirect:false,
            atelier:[],
            name:"",
            visibilite:false
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
         
    }
    
    //   renderRedirect = () => {
    //     if (localStorage.getItem("login")==false) {
    //       return <Redirect to='/login' />
    //     }
    //   }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('image', this.uploadInput.files[0]);
        data.append('titre', this.state.titre);
        data.append('description', this.state.description);
        data.append('date', this.state.date);
        data.append('horaire', this.state.horaire);
        // data.append('duree',  this.state.duree);
        data.append('placedispo', this.state.placedispo);
        data.append('placereserve', this.state.placereserve);
        data.append('prix', this.state.prix);
        data.append('duree',  this.state.duree);
                                                                                                                                                              
        fetch('http://localhost:8080/cuisinier/'+ localStorage.getItem('id'), {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
             
                console.log(body.file1)
                //  this.setRedirect()
                axios.get('http://localhost:8080/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
            });
        });
       
    }

    componentDidMount(){
      
        this.setState({name:localStorage.getItem('jwtToken')})
        console.log(localStorage.getItem('jwtToken'))
        axios.get('http://localhost:8080/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })

    }
    render() {
       
        return (
            
            <div className="row">
                <div id ="entete" className="col-md-3">
                    <div>
                        {/* {this.renderRedirect()} */}
                        <center>
                            <h3>  {this.state.name}</h3> <br></br>
                        </center>
                    </div>
                    <div id="deconnecte">
                        <button onClick={()=>{
                              this.props.logoutUser(this.props.history);
                        }}>deconnecter</button>
                    </div>
                   
            </div>
            <Slidebar/>
            </div>
         
        )
    }
}
Profil.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Profil));