import React from "react"

function Logged(props) {
    return(
        <div>
            <h1>Welcome <span>{props.login}</span></h1>
        </div>
    )
}

export default Logged