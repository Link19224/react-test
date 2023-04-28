import React from "react";
import './Dropdown.css';



interface IDropdown {
    dropdown: boolean
    
}


const DropdownItem = ({dropdown}: IDropdown) => {
    if (!dropdown) {
        return null;
    }
    return (

        <div className="dropdown">
            <div className="dropdown-content">
                <div className="dropdown-item">
                    <li className="li">Icon 1 id name | text 1</li>
                    <li className="li">Icon 2 id name | text 2</li>
                    <li className="li">Icon 3 id name | text 3</li>
                </div>
            </div>
        </div>
    )
}

export default DropdownItem;