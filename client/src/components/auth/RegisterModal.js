import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class RegisterModal extends Component {
    state = {
        modal: false, // represents if  odal is open/close
        name: '',
        email: '',
        password: '',
        msg: null
    };

    static propTypes ={
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value }); // name is setto whatever is types in
    };

    onSubmit = e => {
        e.preventDefault(); // to prevent he actual form submitting

        //Close modal
        this.toggle();

    }

    render() {
        return(
            <div>
            <NavLink onClick={this.toggle} href="#">
            Register
            </NavLink>
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>Register</ModalHeader>
             <ModalBody>
             <Form onSubmit={this.onSubmit}>
             <FormGroup>
             <Label for ="name">Name</Label>
             <Input
             type="text"
             name="name"
             id="name"
             placeholder="Name"
             onChange={this.onChange}
             />

             <Label for ="name">Name</Label>
             <Input
             type="text"
             name="name"
             id="name"
             placeholder="Name"
             onChange={this.onChange}
             />

             <Label for ="name">Name</Label>
             <Input
             type="text"
             name="name"
             id="name"
             placeholder="Name"
             onChange={this.onChange}
             />
             
             <Button
             color= "dark"
             style={{marginTop: "2rem"}}
             block>
             Add Item
             </Button>
             </FormGroup>
             </Form>
             </ModalBody>
            </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {})(RegisterModal);
