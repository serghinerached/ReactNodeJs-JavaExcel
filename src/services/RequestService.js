import axios from "axios";

//const REQUESTS_REST_API_URL = 'http://localhost:8080/api/tasks/requests';
const REQUESTS_REST_API_URL = 'http://serghinerached.github.io/tasks/requests';


class RequestService {

    getSctasks() {
        return axios.get(REQUESTS_REST_API_URL);
    }
}

export default new RequestService();