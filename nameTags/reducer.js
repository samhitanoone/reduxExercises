const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, newName } = action;

    // Add a Name Tag

    if (type === 'addName') {
        return [
            ...state,
            newName
        ]
    };

    return state;
}