import axios from "axios";

const axiospublic = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosPurblic = () => {
    return axiospublic;
};

export default useAxiosPurblic;