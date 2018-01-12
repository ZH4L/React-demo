import React, { Component } from 'react';

class Clock extends Component {
    // 构造器
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0
        };
    }

    // 挂载
    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
    }

    // 卸载
    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick () {
        this.setState(prevState => ({
            date: new Date(),
            count: prevState.count+1
        }))
    }

    handlerClick = (count) => {
        alert(count)
    }

    render () {
        return (
            <div>
                <h1>Hello world!</h1>
                <h2 onClick={this.handlerClick.bind(this, this.state.count)}>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;