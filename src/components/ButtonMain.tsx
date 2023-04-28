import React from "react";
import './ButtonMain.css'


interface IBall {
    text: string,
    click: () => void;
}



const Button = ({text, click}: IBall) => {

    return (
        <button className="button-main" onClick={click}>
            {text}
        </button>
    )
}


export default Button;