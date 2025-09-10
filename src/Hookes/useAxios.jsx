import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const useAxios = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',

    });
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('intercepted request', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        })


    axiosSecure.interceptors.response.use(function (response) {

        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('intercepted response error', error);
        if (status === 401 || status === 403) {

            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxios;