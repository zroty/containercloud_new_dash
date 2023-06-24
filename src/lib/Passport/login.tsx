import axios from "axios";
import Config from "../../WEB_CONFIG.json"
export function login() {
    axios({
        url: Config.http_server + "/passportLogin",
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        }
    }).then((d) => {
        console.log(d.data)
    })
}