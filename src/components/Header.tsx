import React from "react";
import ButtonMain from './ButtonMain'
import { useState } from "react";
import ModalFirst from "./ModalFirst";
import Button from "./Button";
import DropdownItem from "./Dropdown";
import './Header.css'






const Header = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const [open, setOpen] = useState<boolean>(false)


    const buttonOpen = () => {
        setModalActive(true)
      }

    const buttonWindow = () => {
        setModalActive(false)
    
      }
      
    const openingButton = () => {
        console.log(1);
      }

    const funcOpen = () => {
        setOpen(e => !e);
    }

    return (
        <header className="header__header">
            <ButtonMain text={'Popup button'} click={buttonOpen}></ButtonMain>
            <div className="button-collection">
            <Button text={'Page 2'} click={openingButton}></Button>
            <Button text={'Page number 1'} click={openingButton}></Button>
            <Button text={'Dropdown'} click={funcOpen}></Button>
            <DropdownItem dropdown={open} ></DropdownItem>
            </div>
            
            <ModalFirst active={modalActive} setActive={buttonWindow} ></ModalFirst>
        </header>
    )
}


export default Header;