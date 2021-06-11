import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/customer";

class CustomerService {

    registerCustomer(customer){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add',customer);
    }
}
export default CustomerService