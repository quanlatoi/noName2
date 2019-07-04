import Axios from 'axios';

export default function callAPI(endPoint, method, headers){
    const config = {
        baseURL: `http://localhost:3000/api/${endPoint}`,
        method: method,
        headers: {'Content-Type': 'application/json' , ...headers}
    }
    return Axios(config);
}

// instance = Axios.create({
//     baseURL: 'http://localhost:3000/api/',
//     transformRequest: [function (data, headers) {
//         headers['Authorization'] = 'test'
//         return JSON.stringify(data)
//       }],
//     headers: {
//         'Content-Type': 'application/json'
//       }
// });