const axios = require('axios');
const config = require('./../config/keys');
const querystring = require('querystring');

// Initial config set
const key = config.apiKey().key;
const baseAxiosConfig = {
    timeout: 3000,
    baseURL:config.host
  }

//Axios Global config
axios.defaults.headers.common['Authorization'] = `Bearer ${key}`;

// instance for token manage making requests as Admin
const requestAdmin = module.exports = axios.create (baseAxiosConfig);

// Login
const login = async () => {
    try{
        return await axios({
        method: 'post',
        url: `${config.host}/ccadmin/v1/login`,
        data: querystring.stringify({
            'grant_type': 'client_credentials'})
        })
    }catch(e){
        throw new Error(e.response.data.message);
    }
    }

// Interceptor for setting header in requests
requestAdmin.interceptors.request.use( async (config) => {
    try {
        const response = await login();
        config.headers.Authorization = `Bearer ${response.data.access_token}`;
        //console.log(response.data.access_token);
        return config;
    } catch (error) {
        throw new Error("Erro no login: \n" + error);
    }
}, (error) => {
    throw new Error("Erro no pré-login: \n" + error);
}
  );

// Interceptor for response treatment
// requestAdmin.interceptors.response.use( async (response) => {
//     return response;
// }, (error) => {
//     if(error.response.status === 401){

//     }
//     throw new Error(JSON.stringify(error.config, undefined, 2));
// }
//   );


// module.exports = {
//     requestAdmin
// };