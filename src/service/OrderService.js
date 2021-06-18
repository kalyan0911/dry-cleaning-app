import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/order";

class OrderService {

    getOrdersbyCustomer(customerId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/getbycustomer/'+customerId);
    }
    
    addOrder(order){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add',order);
    }
    getBookingbyId(bookingId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/get/'+bookingId);
    }
    updateBooking(booking){
        return axios.put(EMPLOYEE_API_BASE_URL+'/update/'+booking.bookingId,booking);
    }
    deleteOrder(orderId){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/remove/'+orderId);
    }
}
export default new OrderService()