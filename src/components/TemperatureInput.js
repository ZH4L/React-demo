import React, { Component } from 'react';

const scaleNames = {
    c: '摄氏度',
    f: '华氏度'
};

class TemperatureInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            temperature: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }

    render () {
        let temperature = this.state.temperature;
        let scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange}
                    placeholder={scaleNames[scale]}
                />
            </fieldset>
        )
    }
}

export default TemperatureInput;