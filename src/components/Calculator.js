import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

// 水是否烧开组件
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水烧开了</p>;
    }
    return <p>水没烧开</p>;
}


class Calculator extends Component {
    constructor (props) {
        super(props);

        this.state = {
            temperature: ''
        }
    }

    render () {
        let temperature = this.state.temperature;

        return (
            <div>
                <BoilingVerdict celsius={parseFloat(temperature)} />

                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

export default Calculator;