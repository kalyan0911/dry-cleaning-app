import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/Payment";

class PaymentService {

    getPaymentbyCustomer(customerId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/getbycustomer/'+customerId);
    }
    
    addPayment(payment){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add',payment);
    }
    getBookingbyId(bookingId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/get/'+bookingId);
    }
}
export default new PaymentService()