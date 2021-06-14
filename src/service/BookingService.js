import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/bookings";

class BookingService {

    getBookings(customerId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/getbycustomer/'+customerId);
    }
    
    addBooking(booking){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add',booking);
    }
}
export default new BookingService()