import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}
const deleteService = id => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data)
}

export default { getAll, deleteService }