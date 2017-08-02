import React from 'react';
import { Router, Route, Link } from 'react-router'

import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default App;