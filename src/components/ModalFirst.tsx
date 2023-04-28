import React from 'react';
import "./ModalFirst.css"


interface IProps {
    active: boolean;
    setActive: () => void;
    
}

const ModalFirst = ({active, setActive}: IProps) => {
    if (!active) {
        return null;
    }
    return (
        <div className="modal-first" >
            <div className="modal-content" >
                <header className='modal__header'>
                    <div></div> 
                    Popup title
                    <button className="modal__button" onClick={setActive}>X</button>
                </header>
                <div className="modal__body">
                    <input className="modal__input" type="text" />
                </div>
                <div className="modal__text">
                    Should be focused when propup is open
                </div>

            </div>

        </div>
        
    )
}

export default ModalFirst;

