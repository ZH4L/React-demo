// 商品表格容器组件
import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let rows = [];
        let lastCategory = null;
        let filterText = this.props.filterText.toLowerCase(),
            inStockOnly = this.props.inStockOnly; 

        this.props.products.forEach(product => {
            let name = product.name.toLowerCase();
            if (name.indexOf(filterText)<0 || !product.stocked && inStockOnly) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;