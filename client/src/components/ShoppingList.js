import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
/*import  {v4 as uuidv4} from 'uuid';*/
import { connect } from 'react-redux';
import { getItems, deleteItems } from '../actions/itemActions';
import PropTypes from 'prop-types'; //component properties should be in proptypes


class ShoppingList extends Component {
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItems(id);
    };
    
    render() {
        const {items} = this.props.item;
        return(
            <Container>	      
            <ListGroup>
            <TransitionGroup className="shopping-list">
            {items.map(({ id, name})=> (
                <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                className ="remove-btn"
                color="danger"
                size="sm"
                onClick={this.onDeleteClick.bind(this, id)}
                >
                &times;
                </Button> 
                {name}
                </ListGroupItem>
                </CSSTransition>
               
            ))}
            </TransitionGroup>
            </ListGroup>
            </Container>

        );
            }
        }
//items in redux are stored as props
ShoppingList.propTypes  = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}       

const mapStateToProps =(state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItems })(ShoppingList);

