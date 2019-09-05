import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckItem from './CheckItem';
import Dropdown from './Dropdown';

const priceOptions = [
    'All',
    '$',
    '$$',
    '$$$',
    '$$$$',
];

const categories = [
    'All',
    'Italian',
    'Seafood',
    'Steakhouses',
    'Japanese',
    'American',
    'Mexican',
    'Thai'
];

class Filter extends React.Component {
    state = {
        isChecked: false
    }

    render() {
        const { isChecked } = this.state;
        return (
            <div className="filter_container">
                <div className="filter_controls">
                    <span className="filter_text">Filter By:</span>
                    <div className="filter_isOpen">
                        <CheckItem name="Open Now" />
                    </div>
                    <div className="price_dropdown">
                        <Dropdown menuTitle="Price" listItems={priceOptions} />
                    </div>
                    <div className="category_dropdown">
                        <Dropdown menuTitle="Categories" listItems={priceOptions} />
                    </div>
                </div>
                <div className="filter_right">
                    <div className="clearbutton">
                        <span className="clearbutton_text">CLEAR ALL</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
