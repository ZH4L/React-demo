import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

// 水是否烧开组件
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水烧开了</p>;
    }
    return <p>水没烧开</p>;
}

// 温度转换方法
function tryConvert (temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// 摄氏度转华氏度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 华氏度转摄氏度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


class Calculator extends Component {
    constructor (props) {
        super(props);

        this.state = {
            scale: 'c',
            temperature: ''
        }
    }

    // 处理摄氏度变化
    handleCelsiusChange = (value) => {
        this.setState({
            scale: 'c',
            temperature: value
        })
    } 

    // 处理华氏度变化
    handleFahrenheitChange = (value) => {
        this.setState({
            scale: 'f',
            temperature: value
        })
    } 

    render () {
        let scale = this.state.scale;
        let temperature = this.state.temperature;
        let celsius = scale==='f' ? tryConvert(temperature, toCelsius) : temperature;
        let fahrenheit = scale==='c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <BoilingVerdict celsius={parseFloat(celsius)} />

                <TemperatureInput 
                    scale="c" 
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} 
                />
                <TemperatureInput 
                    scale="f" 
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} 
                />
            </div>
        );
    }
}

export default Calculator;