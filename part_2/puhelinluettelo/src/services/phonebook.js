import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const createPerson = newObject => {
	const request = axios.post(baseUrl, newObject)
	return request.then(response => response.data)
}

const deletePerson = PersonId => {
	const request = axios.delete(baseUrl+PersonId)
	return request.then(response => response.data)
}

const phonebook = {
	getAll,
	createPerson,
	deletePerson
}

export default phonebook;