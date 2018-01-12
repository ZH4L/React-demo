// 搜索框组件
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <input type="search" placeholder="请输入搜索内容" value={this.props.filterText} onChange={this.handleChange} />
                <label style={{display: 'block'}}>
                    <input type="checkbox" name="inStockOnly" value={this.props.inStockOnly} /> 只显示库存中的产品
                </label>
            </div>
        );
    }
}

export default SearchBar;