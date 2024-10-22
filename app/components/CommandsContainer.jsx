"use client";
import React from "react";
import Styles from "./Input.module.css";

const CommandsContainer = (props) => {
    // React.useEffect(() => {
        // if(props.history.length === 0)
        //     return;
        // let messageBody = document.getElementById("command-"+(props.history.length-1));
        // objDiv.scrollTop = objDiv.scrollHeight;
        // let messageBody = document.querySelector('#commands-container');
        // messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    // }, [props.history]);

    return (
        <div id="commands-container"> {/*style = {{maxHeight: "55vh", overflowY: "scroll"}}>*/}
            {props.history.map((commandHistory, index) => {
                return <div key={index} id={"command-"+index} style={{display: "block"}} className={`mt-3 ${Styles.userDisplay}`}>
                    guest@internet.com:~${" "}
                    <span className="text-blue-600">{commandHistory.command}</span>
                    <br/>
                    <span className={Styles.colorHackerGreen}>{commandHistory.response}</span>
                </div>;
            })}
        </div>
    );
};

export default CommandsContainer;
