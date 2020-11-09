import React from 'react';

export default class Dice extends React.Component {

    render() {
        return (
            <button style={{display: "inline-block", padding: "25px", border: "grey 2px solid", textAlign: "center"}}
            onClick={() => this.props.onClick()}>
                {this.props.number}
            </button>
        );
    }
}