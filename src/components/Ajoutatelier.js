import React, { Component } from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
export default class Ajoutatelier extends Component {
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
                                                                                                                                                              
        fetch('https://sandycuis.herokuapp.com/cuisinier/'+ localStorage.getItem('id'), {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
             
                console.log(body.file1)
                //  this.setRedirect()
                axios.get('https://sandycuis.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
        this.setState({titre:"",description:"",date:"",placedispo:"",placereserve:"",prix:"",duree:""
    })
            });
        });
       
    }

    componentDidMount(){
      
        this.setState({name:localStorage.getItem('jwtToken')})
        console.log(localStorage.getItem('jwtToken'))
        axios.get('https://sandycuis.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })

    }
    render() {
        return (
            <div>
                <div id="ajout" class="d-flex justify-content-center h-100">
                <form onSubmit={this.handleUploadImage}>
                
                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="titre" placeholder="titre"  onChange={ this.handleChange }
                    value={ this.state.titre } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="description" placeholder="description" onChange={ this.handleChange }
                    value={ this.state.description } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="date" class="form-control"  name="date" placeholder="date" onChange={ this.handleChange }
                    value={ this.state.date } required/>

                                </div>
                                {/* <div class="input-group form-group"> */}
                                    {/* <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="duree" placeholder="duree" onChange={ this.handleChange }
                    value={ this.state.duree }/>

                                </div> */}
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="horaire" placeholder="horaire" onChange={ this.handleChange }
                    value={ this.state.horaire } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="Number" class="form-control"  name="placedispo" placeholder="placedispo" onChange={ this.handleChange }
                    value={ this.state.placedispo } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="Number" class="form-control"  name="placereserve" placeholder="placereserve" onChange={ this.handleChange }
                    value={ this.state.placereserve } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="Number" class="form-control"  name="prix" placeholder="prix" onChange={ this.handleChange }
                    value={ this.state.prix } required/>

                                </div>
                                
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" required/>
                                </div>
                                
                                

                    <div>
                        <button>AJouter</button><br></br>
                        
                    </div>
                    
                   
                </form>
           
            </div>
            </div>
        )
    }
}
