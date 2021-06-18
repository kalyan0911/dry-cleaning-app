import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/";

class CustomerService {

    registerCustomer(customer){
        return axios.post(EMPLOYEE_API_BASE_URL+'customer/add',customer);
    }
    loginCustomer(user){
        return axios.post(EMPLOYEE_API_BASE_URL+'user/getsignin',user);
    }
    getCustomer(userId){
        return axios.get(EMPLOYEE_API_BASE_URL+'customer/get/'+userId);
    }
    updateCustomer(customer){
        return axios.put(EMPLOYEE_API_BASE_URL+'customer/update/'+customer.userId,customer);
    }
    changePassword(user){
        return axios.put(EMPLOYEE_API_BASE_URL+'user/update/'+user.userId,user);
    }
}
export default new CustomerService()