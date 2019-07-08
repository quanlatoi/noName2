import Axios from 'axios';

export default function callAPI(endPoint, method = 'GET', body, headers){
    const config = {
        baseURL: `http://localhost:3000/api/${endPoint}`,
        method: method,
        headers: headers
    }
    if(method === 'GET'){
        config.params = body
    }
    else{
        config.data = body
    }
    return Axios(config);
}