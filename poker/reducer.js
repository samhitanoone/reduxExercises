const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    const { index } = action;
    values = [2,3,4,5,6,7,8,9,10,'A','J','K','Q'];
    suits = ['C', 'D', 'H', 'S'];

    var value = values[Math.floor(Math.random() * values.length)];
    var suit = suits[Math.floor(Math.random() * suits.length)];

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === 'changeCard') {
        return [
            ...state.slice(0,index),
            {
            value: value,
            suit: suit
            },
            ...state.slice(index+1)
        ]

    };

    return state;
}