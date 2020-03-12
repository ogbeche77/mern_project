import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

export class Logout extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, {logout })(Logout);
