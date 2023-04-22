import axios from "axios";


//creating axios instance
export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'a6123e31c00842c89392ddc44e6ef944'
    }
})