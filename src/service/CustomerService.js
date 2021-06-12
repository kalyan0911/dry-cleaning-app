import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/";

class CustomerService {

    registerCustomer(customer){
        return axios.post(EMPLOYEE_API_BASE_URL+'customer/add',customer);
    }
    loginCustomer(user){
        return axios.post(EMPLOYEE_API_BASE_URL+'user/getsignin',user);
    }
    validateUserId(userId){
        return axios.get(EMPLOYEE_API_BASE_URL+'customer/get/'+userId);
    }
}
export default new CustomerService()