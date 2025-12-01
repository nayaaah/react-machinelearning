import axios from "axios";

const http = axios.create({
    baseURL : "flask-model-diabetes-production-3157.up.railway.app/api",
    headers : {
        Accept : "application/json"
    }
})



export default http