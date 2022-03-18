import React from "react";
import MessageStyles from "./MessageStyles.module.css"

const Message = (props) => {
    return(
        <div className={MessageStyles.message_container}>
            <h1>{props.content}</h1>
        </div>
    )
}

export default Message