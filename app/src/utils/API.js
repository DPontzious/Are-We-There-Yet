// import axios from "axios";
// This is where we put our axios calls
import axios from "axios"

export default {
    getMPG: function () {
        // return axios.get("https://www.fueleconomy.gov/ws/rest/vehicle/31873/ws/rest/ympg/shared/ympgVehicle/" + carId);
        return axios.get("https://www.fueleconomy.gov/ws/rest/vehicle/31873/ws/rest/ympg/shared/ympgVehicle/74838");
    }
};
