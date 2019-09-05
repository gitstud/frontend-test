import * as React from 'react';

export default (props) => {
    // use react hooks to handle functional component state
    const { name = '', callback, } = props;
    const [isChecked, setIsChecked] = React.useState(false);
    const toggle = () => {
        setIsChecked(!isChecked);
        if (typeof callback === 'function') {
            callback();
        }
    }

    return (
        <div className="check_container" onClick={toggle}>
            <div className="radioButton">
                {isChecked && <div className="checked" />}
            </div>
            <span className="isOpen_text">{name}</span>
        </div>
    );
}
