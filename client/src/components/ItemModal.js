import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }
    
    render() {
        return(
            <div>
            <Button color="dark" style={{marginBottom: "2rem"}}
            onClick={this.toggle}
            >Add Item</Button>

            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>Add to Dhopping List</ModalHeader>
             <ModalBody>
             <Form onSubmit={this.onSubmit}>
             <FormGroup>
             <Label for ="item">Item</Label>
             <Input
             type="text"
             name="name"
             id="item"
             placeholder="Add shopping item"
             onChange={this.onChange}
             />
             </FormGroup>
             </Form>
             </ModalBody>
            </Modal>
            </div>
        );
    }

}

export default connect()(ItemModal);