const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    const { color } = action;

    // ACTION 1 - Increment height by 10
    if (type === 'addHeight') {
        return {
            ...state,
            height: state.height + 10
        }

    };

    // ACTION 2 - Increment width by 10
    if (type === 'addWidth') {
        return {
            ...state,
            width: state.width + 10
        }
    };
    // ACTION 3 - Change the color
    if (type === 'changeColor') {
        return {
            ...state,
            color: color
        }

    };

    return state;
}