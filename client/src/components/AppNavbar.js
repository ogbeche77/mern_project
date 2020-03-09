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
    <NavLink href="https//google.com">Google</NavLink>
    </NavItem>
    </Nav>
    </Collapse>
    </Container>
    </Navbar>

</div>
    );
}
}

export default AppNavbar;