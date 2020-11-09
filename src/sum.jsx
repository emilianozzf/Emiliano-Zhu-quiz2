import React from 'react';

export default class Dice extends React.Component {

    render() {
        let sum = 0;
        for (let i = 0; i < this.props.numbers.length; i++) {
            sum += this.props.numbers[i];
        }
        console.log(this.props.numbers);

        return (
            <div>
                Sum: {sum}
            </div>
        );
    }
}