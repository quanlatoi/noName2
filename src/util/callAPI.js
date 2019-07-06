import Axios from 'axios';

export default function callAPI(endPoint, method, body, headers){
    const config = {
        baseURL: `http://localhost:3000/api/${endPoint}`,
        method: method,
        data: body,
        headers: {'Content-Type': 'application/json' , ...headers}
    }
    return Axios(config);
}