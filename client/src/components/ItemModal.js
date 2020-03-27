// Item modal to add items
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
import { connect } from 'react-redux'; // bcos we ll use redux
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
/*import  {v4 as uuidv4} from 'uuid';*/


class ItemModal extends Component {
    state = {
        modal: false, // represents if  modal is open/close
        name: ''
    };

    static propTypes ={
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value }); // name is set to whatever is typed in, in this case, e.target.value
    };

    onSubmit = e => {
        e.preventDefault(); // to prevent the actual form submitting

        const newItem ={
            name:this.state.name //state.name is update when we type in input
        };

        //Add item via addItem action
        this.props.addItem(newItem);

        //Close modal
        this.toggle();

    }

    render() {
        return( //ensures item is only displayed after user login
            <div> 
            { this.props.isAuthenticated ?  <Button color="dark" style={{marginBottom: "2rem"}}
            onClick={this.toggle}
            >Add Players
            
            </Button> : <h4 className="mb-3 ml-4"> Please login to manage team</h4>}
           

            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
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
             <Button
             color= "dark"
             style={{marginTop: "2rem"}}
             block>
             Add Players
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
    item:state.item,
    isAuthenticated: state.auth.isAuthenticated //ensures item is only displayed after user login
});

export default connect(mapStateToProps, {addItem})(ItemModal);
