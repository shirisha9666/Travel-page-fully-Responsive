import React from "react";
import "./btn.css"

const STYLES = ["btn-primary", "btn-outline", "'btn--test'"]
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    btnStyle,
    btnSize
}) => {
    const checkButtonStyles = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(btnSize) ? btnStyle : SIZES[0]
    return (
        <>
            <button
                className={`btn ${checkButtonSize} ${checkButtonStyles}`}
                onClick={onclick} type={type}>{children}</button>
        </>
    )
}

