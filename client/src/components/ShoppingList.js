import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
/*import  {v4 as uuidv4} from 'uuid';*/
import { connect } from 'react-redux';
import { getItems, deleteItems } from '../actions/itemActions';
import PropTypes from 'prop-types'; //component properties should be in proptypes


class ShoppingList extends Component {
    //items in redux are stored as props
static propTypes  = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}; 

    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = (id) => {   // methods to delete item is called
        this.props.deleteItems(id);
    };
    
    render() {
        const {items} = this.props.item;
        return(
            <Container>	      
            <ListGroup>
            <TransitionGroup className="shopping-list">
            {items.map(({ _id, name})=> (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                { this.props. isAuthenticated ? (  <Button
                    className ="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)} //onclick, button passed id & calls method above
                    >
                    &times;
                    </Button> ) : null }
               
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
     

const mapStateToProps =(state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getItems, deleteItems })(ShoppingList);

