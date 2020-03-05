import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import  {v4 as uuidv4} from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';

class ShoppingList extends Component {
   /* state = {
        items: [
            { id: uuidv4(), name:"Soap" },
            { id: uuidv4(), name:"Sink" },
            { id: uuidv4(), name:"Sponge" },
            { id: uuidv4(), name:"Shampoo" }
        ]
    }*/
    render() {
        const {items} = this.state;
        return(
            <Container>
            <Button color="dark"
            style={{marginBottom: "2rem"}}
            onClick={() => {
                const name = prompt("Enter Item");
                if(name) {
                    this.setState(state => ({
                        items:[...state.items, { id: uuidv4(), name}]
                    }));
                }
            }}
            >Add Item</Button>
            <ListGroup>
            <TransitionGroup className="shopping-list">
            {items.map(({ id, name})=> (
                <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button className= "remove-btn" color="danger" size="sm"
                onClick={()=>{
                    this.setState(state => ({
                        items: state.items.filter(item =>item.id !==id )
                    }));

                }}>&times;</Button>
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

export default connect(mapStateToProps, { getItems })(ShoppingList);