import './Hello.css';

// import React, { Component } from 'react';
//import { render } from '@testing-library/react';

/* class Hello extends Component {
    render() {
        return (
            <div>
                <h1> Hello World</h1>
                <p>{this.props.greet}</p>
            </div>
        );
    }
} */

const Hello = (props) => {
        return (
            <div>
                <h1>Hello World - 2</h1>
                <p>{props.greet}</p>
            </div>
        );
}

export default Hello;
