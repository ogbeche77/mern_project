import React, { Component } from 'react'; //create react component
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container 
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    state ={
            isOpen:false
        }
        toggle = () =>{ 
            this.setState({
            isOpen: !this.state.isOpen //change isOpen to whatever is not
    });
}

//standard bootstrap attributes
render() { 
    return (
    <div>
    <Navbar color="dark" dark expand="sm" className="mb-5"> 
    <Container>
    <NavbarBrand href="/"> ShoppingList</NavbarBrand>
    <NavbarToggler onClick={this.toggle} /> 
    <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto" navbar>
    <NavItem>
    <RegisterModal />
    </NavItem>
    <NavItem>
    <LoginModal />
    </NavItem>
    <NavItem>
    <Logout/></NavItem>
    </Nav>
    </Collapse>
    </Container>
    </Navbar>

</div>
    );
}
}

export default AppNavbar;