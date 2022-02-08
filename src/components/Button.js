import React from "react";
import PropsTypes from "prop-types";
import "../styles/Button.css";

const Button = ({variant, text, action}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={action} >
            {text}
        </button>
    )
}

Button.PropsTypes = {
    text: PropsTypes.string.isRequired,
    variant: PropsTypes.string.isRequired,
    action: PropsTypes.func

}

export default Button;