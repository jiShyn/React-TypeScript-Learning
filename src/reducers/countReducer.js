const countReducer = (state = 0, action) => {
	switch (action.type) {
		case "increase":
			return state + 1;

		case "decrease":
			return state - 1;

		case "increaseByAmount":
			return state + action.amount;

		default:
			return state;
	}
}

export default countReducer