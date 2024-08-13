const initial = 0;

function countReducer(state = initial, action) {
    const { type, payload} = action;

    switch (type) {
        case "Increment":
            return state+1;
        case 'Decrement':
            return state-1;
        default:
            return state;
    }
}

export default countReducer;