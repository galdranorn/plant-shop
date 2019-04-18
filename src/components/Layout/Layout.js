import React from 'react';
import { Header } from './Header/Header.js';
import { Footer } from './Footer/Footer.js';
import './Layout.scss';

export class Layout extends React.Component {
    render() {
        return (
            <div className='layout container'>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}