const colorReducer = (state = ['red', 'green', 'blue'], action) => {
	switch (action.type) {
		case 'ADDCOLOR':
			return [...state, action.color]

		case 'REMOVECOLOR':
			return state.filter((item) => item !== action.color)

		default:
			return state
	}
}

export default colorReducer