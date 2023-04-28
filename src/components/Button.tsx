import React from "react";




interface IBall {
    text: string,
    click: () => void;
}



const Button = ({text, click}: IBall) => {

    return (
        <button onClick={click}>
            {text}
        </button>
    )
}


export default Button;