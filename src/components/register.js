import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentificate';
 class Register extends Component {
    constructor() {
        super();
        this.state = {
            nom: '',
            prenom:"",
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            specialite:this.state.specialite,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
        }
        this.props.registerUser(user, this.props.history);
        if(localStorage.getItem("mail")=="email existante"){
            document.getElementById("statut").innerHTML="Email existante"
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <div id="contenu">
               <div class="d-flex justify-content-center h-100">
                    <div id="card2" class="card">
                        <div class="card-header">
                            <center><h3>Inscription</h3></center>
                            <div class="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i class="fab fa-google-plus-square"></i></span>
                                <span><i class="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <form  onSubmit={ this.handleSubmit }>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="nom" placeholder="username"  onChange={ this.handleInputChange }
                    value={ this.state.nom } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="prenom" placeholder="prenom"  onChange={ this.handleInputChange }
                    value={ this.state.prenom } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="email" placeholder="email" onChange={ this.handleInputChange }
                    value={ this.state.email } required/>

                                </div>
                                    <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="specialite" placeholder="specialite" onChange={ this.handleInputChange }
                    value={ this.state.specialite }/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control"  name="password"  name="password" placeholder="password" onChange={ this.handleInputChange }
                    value={ this.state.password } required/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="password" class="form-control"  name="password_confirm" placeholder="confirm password" onChange={ this.handleInputChange }
                    value={ this.state.password_confirm } required/>

                                </div>
                                <div class="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
					</div>
                                <div class="form-group">
                                    <input type="submit" value="S'inscrire" class="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Avoir deja une compte ?<a href="#" onClick={()=>window.location="/login"}>Se connecter</a>
                            </div>
                            <span className="text-danger" id="statut"></span>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))