const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

document.getElementById('height')
    .addEventListener('click', e => dispatch ({
        type:'addHeight'
    }));

document.getElementById('width')
    .addEventListener('click', e => dispatch ({
        type:'addWidth'
    }));

document.getElementById('red')
    .addEventListener('click', e => dispatch ({
        type:'changeColor', color: '#ff0000'
    }));

document.getElementById('blue')
    .addEventListener('click', e => dispatch ({
        type:'changeColor', color: '#0000FF'
    }));