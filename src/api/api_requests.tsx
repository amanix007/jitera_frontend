import axios from "axios";


// axios.defaults.baseURL = apiBaseUrl;
// axios.defaults.headers.post["Content-Type"] = "application/json";


export async function get_users() {
    try {
        let result = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(result);
        if (!result.data.error) {
            return result.data;
        }
        // Alert("Oops!", result.data.message, "error");
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}