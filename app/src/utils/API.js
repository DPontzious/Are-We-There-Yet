// This is where we put our axios calls
import axios from "axios"

export default {
    getEvents: function (query) {
        return axios.get("/v1/events", { params: { q: query } });
    }


};