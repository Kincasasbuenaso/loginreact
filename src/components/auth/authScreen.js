
import React, { Component } from 'react';
import '../../styles/components/_auth.scss';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { useSelector} from 'react-redux';


const menu = [
    {id:1, name:"Inicio"},
    {id:2, name:"Servicio"},
    {id:3, name:"Nuestro Equipo"},
    {id:4, name:"Portafolio"},
    {id:5, name:"Contácto"},
    {id:6, name:"Términos y Condiciones"}
];

const Success = () =>{ 
    const {registered} = useSelector(state => state.auth); 

    if(registered){
        document.getElementById('container-formAuth').classList.add('d-none');
        return (<div className="auth__success-container fade show">
                <h5>Success</h5>
                <img src="../assets/succes.svg" alt="succes"/>
            </div>);
    }else{
        return false;
    }
}

export class authScreen extends Component {


 constructor(props){
  super(props)

  this.state = {
      activeMenu:0,
      menu:menu
  }
  
 }

 UNSAFE_componentWillMount (){
    document.body.classList.add('bg-auth');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-auth');
  }

  openNav() {
    //console.log('open menu');
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


    toogleActiveMenuItem(index){
        this.setState({...this.state, activeMenu: this.state.menu[index]})
    }

     AddClassActiveMenu(index){
        if(this.state.menu[index] === this.state.activeMenu)
            return "sidemenu-item active";
        else
            return "sidemenu-item";
    }

 render () { 
   return( 
   <>
        <ul className="nav justify-content-end sticky-top" >
            <li className="nav-item" onClick={this.openNav}>
                <a href="#" className="nav-link"   aria-disabled="true">
                    <i className="auth__menu-ico"></i>
                </a>
            </li>
        </ul>
        <div className="logo-auth">
            <img src="./assets/logo-auth.svg" alt="logo_auth"/>
        </div>
        <div>
            <div className="auth__login-register mb-5" id="container-formAuth">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item login" role="presentation">
                        <a className="nav-link active" id="login-tab" data-bs-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Ingreso</a>
                    </li>
                    <li className="nav-item register" role="presentation">
                        <a className="nav-link" id="register-tab" data-bs-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Registro</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                        <LoginScreen/>
                    </div>
                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <RegisterScreen/>
                    </div>
                </div>


                
            </div>
            
            <Success/>


            <div id="mySidenav" className="sidenav-menu bg-menu">
                <div className="logo-auth-menu">
                    <img src="./assets/logo-auth.svg" alt="logo_menu"/>
                </div>
                <a href="#" className="closebtn" onClick={this.closeNav}><i className="back-menu"></i></a>

                {
                    menu.map((item,index)=>{
                        return <a href="void(0)" key={index} className={this.AddClassActiveMenu(index)}  onClick={()=>{ this.toogleActiveMenuItem(index)} }>{item.name}</a>;
                    })
                }
                
            </div>

        </div>





    </>
    );
    
 }

}