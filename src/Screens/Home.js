import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Settings from '../Components/Settings/Settings';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Settings/>
            </div>
        );
    }
}

export default Home;