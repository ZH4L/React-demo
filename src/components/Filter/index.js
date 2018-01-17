// 筛选组件
import React, { Component } from 'react';
import style from './index.css';
import SearchBar from './SearchBar';
import ProductTable from "./ProductTable";

export default class Filter extends Component {
    constructor (props) {
        super(props);

        this.state = {
            PRODUCTS: [],
            filterText: "",
            inStockOnly: false
        };
    }

    // 挂载
    componentDidMount() {
        this.setState({
            PRODUCTS: [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ]
        });
    }

    // 更改输入框值
    changeFilterText = (value) => {
        this.setState({
            filterText: value
        })
    }

    // 更改复选框值
    changeInStockOnly = (checked) => {
        this.setState({
            inStockOnly: checked
        })
    }

    render () {
        let filterText = this.state.filterText;
        let inStockOnly = this.state.inStockOnly;

        return (
            <div className="filter">
                <SearchBar 
                    filterText={filterText} 
                    inStockOnly={inStockOnly}
                    changeFilterText={this.changeFilterText}
                    changeInStockOnly={this.changeInStockOnly}
                />
                <ProductTable 
                    products={this.state.PRODUCTS} 
                    filterText={filterText} 
                    inStockOnly={inStockOnly} 
                />
            </div>
        );
    }
}