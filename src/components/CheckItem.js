import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkItem } from '../actions';

const CheckItem = (props) => {
    const { item = {}, filters, _checkItem } = props;

    return (
      <div className="check_container" onClick={() => _checkItem(item)}>
        <div className="radioButton">
          {!!filters[item.id] && <div className="checked" />}
        </div>
        <span className="isOpen_text">{item.name}</span>
      </div>
    );
}


const mapStateToProps = ({ app: { filters } }) => ({
  filters,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  _checkItem: checkItem
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckItem);
