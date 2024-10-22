"use client";
import React, {useState} from "react";
import Styles from "./Input.module.css";
import CommandsContainer from "./CommandsContainer";

const commandResponsesList = [
    {
        command: "help",
        type: "startsWith",
        response: "You ain't getting any help by me! XD 💀💀",
        action: () => {}
    },
    {
        command: "gui open",
        type: "equals",
        response: "You can open the GUI Webpage at https://haneesh.in",
        action: () => {
            window.open("https://haneesh.in")
        }
    },
    {
        command: "sudo help --beg",
        type: "equals",
        response: <p>help - Fake Help<br/>gui open - Open Graphic User Interface</p>,
        action: () => {
            alert("Temporary sudo Enabled!")
        }
    },
    {
        command: "sudo",
        type: "startsWith",
        response: "AuthExceptionError: Given device is not an Admin Authorized Device. Access Denied!",
        action: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
    },
    {
        command: "gui --open",
        type: "equals",
        response: "GUI Requested, Opening the website.",
        action: () => {
            window.open("https://www.haneesh.in")
        }
    },
    {
        command: "gui -v",
        type: "startsWith",
        response: "GUI v1.0.2",
        action: () => {}
    },
    {
        command: "gui",
        type: "startsWith",
        response: "GUI of this site has also been built by Haneesh Pediredla, make sure to try it out!! GGs Buddy!",
        action: () => {}
    },
    {
        command: "about him",
        type: "equals",
        response: "Haneesh Pediredla, the owner of this site has an expertise in Full Stack Web Development. I have personally built this site. I am, you can say, enthusiastic? That's it for about me!!",
        action: () => {}
    },
    {
        command: "ascii",
        type: "equals",
        response: <pre className={Styles.colorHackerGreen}>
                {" "}_   _                            _<br/>
                | | | | __ _ _ __   ___  ___  ___| |__ <br/>
                | |_| |/ _` | {"'"}_ \ / _ \/ _ \/ __| {"'"}_ \ <br/>
                |  _  | (_| | | | |  __/  __/\__ \ | | | <br/>
                |_| |_|\__,_|_| |_|\___|\___||___/_| |_|
            </pre>,
        action: () => {}
    }
];

const blacklisted = ["ligma", "longma", "gay", "lesbian", "clarified butter", "fuck", "nigga", "negro", "shit", "asshole", "dumb ass", "ass", "black monkey", "bitch", "bastard"];

const Input = () => {
    const [display, setDisplay] = useState(true);
    const [command, setCommand] = useState("");
    const [history, setHistory] = useState([]);
    const [backLockCount, setBackLockCount] = useState(1);

    document.onkeydown = (e) => {
        e.preventDefault();
        if ((e.ctrlKey && e.shiftKey && e.code === "KeyI") || e.code === "F12") {
            e.preventDefault()
            alert("Nice try kiddo!");
        } else if(e.key.length === 1 && !e.ctrlKey && !e.altKey)
            setCommand(command + e.key);
        else if(e.code === "Backspace")
            setCommand(command.substring(0, command.length - 1));
        else if(e.code === "Enter" || e.code === "NumpadEnter") {
            // setBackLockCount(0);
            const temp = [...history];
            const event = {command};
            for(let i = 0; i < commandResponsesList.length; i++) {
                let commandResponse = commandResponsesList[i];
                if(commandResponse.type === "startsWith" && command.startsWith(commandResponse.command)) {
                    event.response = commandResponse.response;
                    setTimeout(commandResponse.action, 1000);
                    break;
                } else if(commandResponse.type === "equals" && commandResponse.command === command) {
                    event.response = commandResponse.response;
                    setTimeout(commandResponse.action, 1000);
                    break;
                }

                blacklisted.forEach((word) => {
                    if(command.includes(word)) {
                        event.response = "Erm, what the sigma?"
                    }
                });
            };
            if(event.response === undefined)
                event.response = "RuntimeException: Command not found on the List. To get a list of commands try hacking the site."
            temp.push(event);
            setHistory(temp);
            setCommand("");
        } else if(e.code === "ArrowUp" && backLockCount <= history.length) {
            setCommand(history[history.length-backLockCount].command);
            setBackLockCount(backLockCount+1);
        } else if(e.code === "ArrowDown" && backLockCount >= 0) {
            if(backLockCount === 1) {
                setCommand("");
                return;
            }
            setCommand(backLockCount === 2 ? "" : history[history.length-backLockCount+2].command);
            setBackLockCount(backLockCount-1);
        }
    }

    return <>
        { display &&
            <div>
                <CommandsContainer history={history} />
                <p className={`mt-3 ${Styles.userDisplay}`}>
                    guest@internet.com:~${" "}
                    <span className="text-blue-600">{command}</span>
                    <span
                        className={`${Styles.commandArea} ${Styles.blink}`}
                    >█</span>
                </p>
            </div>
        }
    </>
};

export default Input;
