import { FETCH_CLIENTS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CLIENTS:
		console.log(action.payload)
		//take existing state, and concat with new state
			return [...state, ...action.payload.data];
	}
	return state;
}