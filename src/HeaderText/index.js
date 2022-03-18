import React from "react";
import HeaderTextStyles from "./HeaderTextStyles.module.css"

const HeaderText = (props) => {
    return (
        <div className={HeaderTextStyles.header_text}>
            <h1>Learn to code by <br></br>watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
            {props.children}
        </div>
        
    )
}

export default HeaderText