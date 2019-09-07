const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

document.getElementById('card1Button')
    .addEventListener('click', e => dispatch ({
        type:'changeCard', index: 0
    }));

document.getElementById('card2Button')
    .addEventListener('click', e => dispatch ({
        type:'changeCard', index: 1
    }));

    