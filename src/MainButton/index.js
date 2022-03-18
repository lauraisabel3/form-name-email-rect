import React from "react";
import MainButtonStyles from "./MainButtonStyles.module.css"

const MainButton = (props) => {
    return (
        
        <button
        className={MainButtonStyles.main_button}
        onSubmit={props.handleSubmit}>CLAIM YOUR FREE TRIAL</button>
    )
}

export default MainButton