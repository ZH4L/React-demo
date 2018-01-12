import React, { Component } from 'react';

const scaleNames = {
    c: '摄氏度',
    f: '华氏度'
};

class TemperatureInput extends Component {
    constructor (props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render () {
        let temperature = this.props.temperature;
        let scale = this.props.scale;
        return (
            <fieldset>
                <legend>输入 {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange}
                    placeholder={scaleNames[scale]}
                />
            </fieldset>
        )
    }
}

export default TemperatureInput;