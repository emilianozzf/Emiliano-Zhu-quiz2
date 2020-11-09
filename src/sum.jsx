import React from 'react';

export default class Dice extends React.Component {

    _sum() {
        let sum = 0;
        for (let i = 0; i < this.props.numbers.length; i++) {
            sum += this.props.numbers[i];
        }
        return sum;
    }

    render() {
        let sum = this._sum();

        return (
            <div>
                Sum: {sum}
            </div>
        );
    }
}