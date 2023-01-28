import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotFound extends Component {
    state = {  } 
    render() { 
        return (
            <div className="not-found">
                <h1>404, Page not found</h1>
                <Link to='/'>Go to Homepage</Link>
            </div>
        );
    }
}
 
export default NotFound;