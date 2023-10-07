import instance from 'axios';
const AxiosClient = instance.create({
    baseURL: 'http://10.49.171.4:8080/api-hackathon',
});
const requestHandler = (request) => {
    request.headers['Accept'] = "application/json";
    request.headers['Content-type']='application/json';
    return request;
};
const errorResponseHandler = (error) => {
    return Promise.reject(error);
};
const successResponseHandler = (response) => Promise.resolve(response.data);

AxiosClient.interceptors.request.use(
(request)=>requestHandler(request),
    (error) => Promise.reject(error)
);
AxiosClient.interceptors.response.use(
    (response) => successResponseHandler(response),
    (error)=> errorResponseHandler(error)
);

export default AxiosClient;