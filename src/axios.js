import axios from 'axios';
const instance = axios.create({
	baseURL: "http://localhost:5001/clone-ef0ad/us-central1/api",
});
export default instance;
// http://localhost:5001/clone-ef0ad/us-central1/api