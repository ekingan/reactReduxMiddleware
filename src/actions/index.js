import { FETCH_CLIENTS } from './types';
import axios from 'axios';

export function fetchClients() {
	const url = 'https://jsonplaceholder.typicode.com/users'
	const request = axios.get(url);
	return {
		type: FETCH_CLIENTS,
		payload: request
	};
}