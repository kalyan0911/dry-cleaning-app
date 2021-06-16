import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/customeritem";

class CustomerItemService {

    getCustomerItems(customerId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/getbycustomer/'+customerId);
    }
    
    addItem(customerItem){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add',customerItem);
    }
    getItembyId(itemId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/get/'+itemId);
    }
    updateItem(customerItem){
        return axios.put(EMPLOYEE_API_BASE_URL+'/update/'+customerItem.itemId,customerItem);
    }
    deleteItems(itemId){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/remove/'+itemId);
    }
}
export default new CustomerItemService()