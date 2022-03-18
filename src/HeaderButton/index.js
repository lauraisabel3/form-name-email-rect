import React from "react";
import HeaderButtonStyles from "./HeaderButtonStyles.module.css"


const HeaderButton = () => {
    return (
        <button  className={HeaderButtonStyles.header_button}>Try it free 7 days <span>then <br></br>$20/mo. thereafter</span></button>
    )
}

export default HeaderButton