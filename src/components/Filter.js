import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckItem from './CheckItem';
import Dropdown from './Dropdown';
import { clearFilters } from '../actions';
import { priceOptions, categories, openNow } from '../constants';

class Filter extends React.Component {
    state = {
        isChecked: false
    }

    render() {
        const { isChecked } = this.state;
        const { _clearFilters } = this.props;
        return (
          <div className="filter_container">
            <div className="filter_controls">
              <span className="filter_text">Filter By:</span>
              <div className="filter_isOpen">
                <CheckItem item={openNow} />
              </div>
              <div className="price_dropdown">
                <Dropdown menuTitle="Price" listItems={priceOptions} />
              </div>
              <div className="category_dropdown">
                <Dropdown menuTitle="Categories" listItems={categories} />
              </div>
            </div>
            <div className="filter_right">
              <div className="clearbutton" onClick={_clearFilters}>
                <span className="clearbutton_text">CLEAR ALL</span>
              </div>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  // I use the _name pattern here to avoid shadowing the import
  _clearFilters: clearFilters
}, dispatch);

export default connect(null, mapDispatchToProps)(Filter);
