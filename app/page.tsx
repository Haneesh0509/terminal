import Styles from "./index.module.css";
import Input from "@/app/components/Input";

export default function Home() {
    return (
        <main className="min-h-screen pt-6 pb-6 pr- pl-8">
            <div className={Styles.systemMessage}>No Rights Reserved. Everything is Open-Sourced.</div>
            <pre className={Styles.colorHackerGreen}>
                {" "}_   _                            _<br />
                | | | | __ _ _ __   ___  ___  ___| |__ <br />
                | |_| |/ _` | '_ \ / _ \/ _ \/ __| '_ \ <br />
                |  _  | (_| | | | |  __/  __/\__ \ | | | <br />
                |_| |_|\__,_|_| |_|\___|\___||___/_| |_|
            </pre>
            <br/>
            <div className={Styles.initMessage}>You stumble upon a web terminal. Since it is known to hide a secret, try and explore the area.</div>
            <div className={Styles.initMessage}>Try some common and general commands.</div>
            <Input />
        </main>
    );
}
