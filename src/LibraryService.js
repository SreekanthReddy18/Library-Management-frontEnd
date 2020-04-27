import axios from 'axios'

const LIBRARY_API_URL = 'http://localhost:8089'
const GET_ALL_BOOKS_API_URL = `${LIBRARY_API_URL}/book/getAll/1`

class LibraryDataService {

    retrieveAllBooks() {
        return axios.get(`${GET_ALL_BOOKS_API_URL}`);
    }

}

export default new LibraryDataService()