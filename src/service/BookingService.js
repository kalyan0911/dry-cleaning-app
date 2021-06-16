import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/bookings";

class BookingService {

    getBookings(customerId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/getbycustomer/'+customerId);
    }
    
    addBooking(booking){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add',booking);
    }
    getBookingbyId(bookingId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/get/'+bookingId);
    }
    updateBooking(booking){
        return axios.put(EMPLOYEE_API_BASE_URL+'/update/'+booking.bookingId,booking);
    }
    deleteBooking(bookingId){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/remove/'+bookingId);
    }
}
export default new BookingService()