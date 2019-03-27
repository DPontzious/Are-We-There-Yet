// This is where we put our axios calls
import axios from "axios"

export default {
    getEvent: function () {
        return axios.get("http://api.eventful.com/json/events/search?&app_key=xrgnP4GQZxFmGt2n&keywords=books&location=San+Diego&date=Future");
    },

    login: function(users){
        return axios.post("/v1/signin", users)
    
    }


};