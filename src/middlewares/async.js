export default function ({ dispatch }) {
	return next => action => {
		if (!action.payload || !action.payload.then) {
			return next(action);
		}
		//make sure action's promise resolves
		action.payload
			.then(function(response) {
				//create new action of same type
				//replace promise with response data
				const newAction = { ...action, payload: response };
				dispatch(newAction);
			});
	}
}