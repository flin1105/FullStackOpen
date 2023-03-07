import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getALL = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

const add = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

const remove = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`);
	return request.then((response) => {
		console.log(response.data);
		return response.data;
	});
};

export default { getALL, add, remove };
