import 'babel-polyfill';
import React, { Component } from 'react';
import MenuButton from './menu_buttons_part';
require('../../css/scss.css');

class App extends Component {
    render() {
        return (
            <MenuButton/>
        );
    }
}

export default App;