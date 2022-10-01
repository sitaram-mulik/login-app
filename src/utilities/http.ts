import axios from 'axios';


const httpClient = axios.create({
    headers: {}
});

httpClient.interceptors.response.use(function (response) {
    return response?.data || response;
}, function (error) {
    return Promise.reject(error);

});

export default httpClient;