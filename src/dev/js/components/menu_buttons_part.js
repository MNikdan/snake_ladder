import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MenuButtonsPart extends Component{
    render(){
        return (
            <ol>
                {this.createMenuButtonsList()}
            </ol>
        );
    }

    createMenuButtonsList() {
        return this.props.menuButtons.map((button) => {
            return (
                <li id={button.id} key={button.id}>{button.text}</li>
            );
        });
    }
}

function mapStateToProps(state) {
    return {
        menuButtons: state.menuButtons
    };
}

export default connect(mapStateToProps)(MenuButtonsPart);