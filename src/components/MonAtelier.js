import React, { Component } from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import "./slide.css"
import "./table.css"
export default class MonAtelier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            titre: "",
            description: "",
            horaire: "",
            duree: "",
            date: "",
            placedispo: "",
            placereserve: "",
            prix: "",
            image: '',
            redirect: false,
            atelier: [],
            name: ""
        };

        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {

        this.setState({ name: localStorage.getItem('jwtToken') })
        console.log(localStorage.getItem('jwtToken'))
        axios.get('https://sandycuis.herokuapp.com/cuisinier/' + localStorage.getItem('id')).then(res => {
            console.log(res.data)
            this.setState({ atelier: res.data })
        })

    }
    render() {
        return (
            <div className=" container">
                <table >
                    <thead>
                        <tr>
                            <th scope="col">Titre</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date</th>
                            <th scope="col">Horaire</th>
                            <th scope="col">Place disponible</th>
                            <th scope="col">Place reserve</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Image</th>
                            <th scope="col">visibilite</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.atelier.length > 0 ? (this.state.atelier.map(prof => {
                            var url = "https://sandycuis.herokuapp.com/public/" + prof.image
                            return (
                                <tr>
                                    <th scope="row">{prof.titre}</th>
                                    <td>{prof.description}</td>
                                    <td>{prof.date}</td>
                                    <td>{prof.horaire}</td>

                                    <th scope="row">{prof.placedispo}</th>
                                    <td>{prof.placereserve}</td>
                                    <td> {prof.prix}</td>
                                    <td><img src={url} id="tabim"/></td>
                                    <td>  {prof.visibilite == true ? (<button onClick={(e) => {
                                        e.preventDefault()
                                        axios.get(" https://sandycuis.herokuapp.com/atelieraffichier/" + prof._id).then(res => {
                                            axios.get('http://localhost:8080https://sandycuis.herokuapp.com/cuisinier/' + localStorage.getItem('id')).then(res => {
                                                console.log(res.data)
                                                this.setState({ atelier: res.data })
                                            })
                                            console.log(res.data)
                                        })


                                    }}>Desactiver</button>) : (<button onClick={(e) => {
                                        e.preventDefault()
                                        console.log(prof._id)
                                        axios.get("https://sandycuis.herokuapp.com/atelieraffichier/" + prof._id).then(res => {
                                            axios.get('https://sandycuis.herokuapp.com/cuisinier/' + localStorage.getItem('id')).then(res => {
                                                console.log(res.data)
                                                this.setState({ atelier: res.data })
                                            })
                                            console.log(res.data)
                                        })

                                    }}>Activer</button>)}</td>
                                    <td><button className="btn-primary"onClick={() => {
                                        //  axios.post("http://localhost:8080/particulier/"+prof._id)
                                        confirmAlert({
                                            customUI: ({ onClose }) => {
                                                return (
                                                    <div  id ="confirm"className='custom-ui'>
                                                        <h2 class="card-title">Modification Atelier</h2>
                                                        <input id="input" name="titre" onChange={this.handleChange} placeholder="Entrer votre titre" value={this.state.value} /><br />
                                                        <input id="input" name="description" onChange={this.handleChange} placeholder="Entrer votre description" v alue={this.state.value} /><br />
                                                        <input id="input" name="date" onChange={this.handleChange} placeholder="Entrer votre email" value={this.state.value} type="date" /><br />
                                                        <input id="input" name="horaire" onChange={this.handleChange} placeholder="Entrer votre horaire" /><br />
                                                        <input id="input" name="placedispo" onChange={this.handleChange} placeholder="Entrer place disponible" type="Number" value={this.state.value} /><br />
                                                        <input id="input" name="placereserve" onChange={this.handleChange} placeholder="Entrer place reserve" type="Number" alue={this.state.value} /><br />
                                                        <input id="input"name="prix" onChange={this.handleChange} placeholder="Entrer prix" type="Number" value={this.state.value} /><br />
                                                        <input id="input" name="telephone" ref={(ref) => { this.uploadInput2 = ref; }} type="file" /><br />
                                                        <button onClick={onClose} className=" BOU1 btn btn-secondary">Fermer</button>
                                                        <button
                                                            onClick={() => {
                                                                const data2 = new FormData();
                                                                data2.append('image', this.uploadInput2.files[0]);
                                                                data2.append('titre', this.state.titre);
                                                                data2.append('description', this.state.description);
                                                                data2.append('date', this.state.date);
                                                                data2.append('horaire', this.state.horaire);
                                                                // data.append('duree',  this.state.duree);
                                                                data2.append('placedispo', this.state.placedispo);
                                                                data2.append('placereserve', this.state.placereserve);
                                                                data2.append('prix', this.state.prix);
                                                                data2.append('duree', this.state.duree);

                                                                fetch('https://sandycuis.herokuapp.com/atelier/' + prof._id, {
                                                                    method: 'POST',
                                                                    body: data2,
                                                                }).then((response) => {
                                                                    response.json().then((body) => {

                                                                        console.log(body.file1)
                                                                        //  this.setRedirect()
                                                                        axios.get('https://sandycuis.herokuapp.com/cuisinier/' + localStorage.getItem('id')).then(res => {
                                                                            console.log(res.data)
                                                                            this.setState({ atelier: res.data })
                                                                        })

                                                                    });
                                                                    onClose();
                                                                });




                                                            }}
                                                            className="  BOU btn btn-success">
                                                            Modifier
                                                            </button>
                                                    </div>
                                                );
                                            }
                                        });
                                    }}>Modifier</button></td>
                                </tr>)









                        }

                        )) : ""}
                    </tbody>
                    </table>
            </div>


                )
            }
        }
