// index.js
import path from "./path"
import axios from "../utils/request"

export default {
    getChengpin() {
        return axios.get(path.baseUrl + path.chengpin)
    }
}