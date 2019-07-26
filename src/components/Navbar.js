import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentificate';
import { withRouter } from 'react-router-dom';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown } from "mdbreact";
    // import logo from "./logobe.png"
class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            

          <div>
<div id="top-nav" class="navbar navbar-inverse navbar-static-top eto">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <img class="brand_logo" alt="Logo"/>
            <a class="navbar-brand" href="" id='daholo'>Dashboard</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    {/* <a class="dropdown-toggle" role="button" data-toggle="dropdown" href="a"><i class="fa fa-user-circle"></i> Admin </a> */}
                    <ul id="g-account-menu" class="dropdown-menu" role="menu">
                    <li><a href="a"  onClick={this.onLogout.bind(this)}><i class="fa fa-sign-out"></i> Se déconnecter</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>

</div>


<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12" id ="aaa">

    <ul  >
        <li><a href="" className='sac'><i class="fa fa-dashboard" ></i> Dashboard</a></li><br/><br/>
        
        <li><Link to={"/register/"+localStorage.getItem('id')} className='sac'><i class="fa fa-history"></i> Listes de Mes Ateliers</Link></li><br/><br/>

        <li><Link to={"/atelier"}  className='sac'><i class="fa fa-tags"></i> Ajouter un Atelier</Link></li><br/><br/>
        <hr/>
        {/* <li><a href="a"><i class="fa fa-lock"></i> Change Password</a></li><br/><br/> */}

    </ul>
</div>

</div>

        )
      const guestLinks = (
   <MDBNavbar  color="default-color" dark expand="md" id="eto">
            
   <MDBNavbarToggler onClick={this.toggleCollapse} />
   <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
     <MDBNavbarNav left>
     <MDBNavItem>
    
     <img class="brand_logo" alt="Logo"/>
 </MDBNavItem>
 <MDBNavItem>
    
    <MDBNavLink to="/client" id='daholo'>Accueil</MDBNavLink>
  </MDBNavItem>
 
       
       <MDBNavItem>
         <MDBDropdown>
           
           
         </MDBDropdown>
       </MDBNavItem>
     </MDBNavbarNav>
     <MDBNavbarNav right>
       
     <MDBNavLink className="waves-effect waves-light" to="/login" id='daholo'>
              Se Connecter
            </MDBNavLink>
     </MDBNavbarNav>
   </MDBCollapse>
 </MDBNavbar>
     


      )
        return(
            
                
                <div  id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
           
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));