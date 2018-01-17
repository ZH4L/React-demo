// 搜索框组件
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
    }

    handleTextChange = (e) => {
        this.props.changeFilterText(e.target.value);
    }

    handleCheckChange = (e) => {
        this.props.changeInStockOnly(e.target.checked);
    }

    render () {
        return (
            <div>
                <input type="search" placeholder="请输入搜索内容" value={this.props.filterText} onChange={this.handleTextChange} />
                <label style={{display: 'block'}}>
                    <input type="checkbox" name="inStockOnly" checked={this.props.inStockOnly}  onChange={this.handleCheckChange} /> 只显示库存中的产品
                </label>
            </div>
        );
    }
}

export default SearchBar;