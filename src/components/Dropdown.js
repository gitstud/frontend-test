import * as React from 'react';
import onClickOutside from 'react-onclickoutside';
import CheckItem from './CheckItem';

class DropDownMenu extends React.Component {
    state = { isOpen: false }

    handleClickOutside = () => {
        const { isOpen } = this.state;
        // need this condition because otherwise
        // all dropdowns will open and close at the same time
        if (isOpen) {
            this.setState({ isOpen: false });
        }
        // also would have used functional component with
        // useState hook but was running into similiar problems there.
    }

    render() {
        const { listItems = [], menuTitle = '' } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="dropdown_wrapper">
                <div className="dropdown_button" onClick={() => this.setState({ isOpen: !isOpen })}>
                    <span className="isOpen_text">{menuTitle}</span>
                    <span className="isOpen_text"><ion-icon name={isOpen ? 'arrow-dropup' : 'arrow-dropdown'}></ion-icon></span>
                </div>
                {isOpen && (
                    <div className="dropdown_list">
                        {listItems.map(item => (
                            <div key={item.id} className="dropdown_listitem">
                                <CheckItem item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default onClickOutside(DropDownMenu);