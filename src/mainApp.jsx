import React from 'react';
import Dice from './dice.jsx';
import Sum from './sum.jsx'

export default class MainApp extends React.Component {
    constructor() {
        super();
        this.state = {dices: []};
    }

    _insertDice() {
        let newDices = this.state.dices.slice(0, this.state.dices.length);
        newDices.push(0);
        this.setState({dices: newDices});
    }

    _removeDice() {
        let newDices = this.state.dices.slice(0, this.state.dices.length);
        if (newDices.length === 0) {
            return;
        }
        newDices.pop();
        this.setState({dices: newDices});
    }

    _rollDices() {
        let newDices = this.state.dices.slice(0, this.state.dices.length);
        for (let i = 0; i < newDices.length; i++) {
            let newNum = Math.floor(Math.random() * 6) + 1;
            newDices[i] = newNum;
        }
        this.setState({dices: newDices});
    }


    render() {
        return (
            <div>
                <div>
                    <h1>Dice Roller</h1>
                </div>
                <div>
                    <button onClick={() => this._insertDice()}>Add</button>
                    <button onClick={() => this._removeDice()}>Remove</button>
                </div>
                <div>
                    {this.state.dices.map((dice) => (
                        <Dice number={dice} onClick={() => this._rollDices()}/>
                    ))}
                </div>
                <div>
                    <Sum numbers={this.state.dices}/>
                </div>
            </div>
        );
    }
}