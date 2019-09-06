import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkItem } from '../actions';

const CheckItem = (props) => {
    // use react hooks to handle functional component state
    const { name = '', filters, _checkItem } = props;
    const toggle = () => {
        _checkItem(name);
    }

    return (
        <div className="check_container" onClick={toggle}>
            <div className="radioButton">
                {!!filters[name] && <div className="checked" />}
            </div>
            <span className="isOpen_text">{name}</span>
        </div>
    );
}


const mapStateToProps = ({ filters }) => ({
  filters,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  _checkItem: checkItem
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckItem);
