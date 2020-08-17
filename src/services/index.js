 import axios from 'axios'
export const loginUserService=(request)=>{
    const BASE_URL='https://cp.perspectico.com/api/v1/login';

    const paramaters={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(request.user)
    };
    return axios(BASE_URL,paramaters)
    .then(response=>{
        return response.json();
    })
    .then(json=>{
        return json;
    })
};