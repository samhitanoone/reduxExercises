const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

var nameForm = document.getElementById('nameForm');

nameForm.addEventListener('submit', e => {
        e.preventDefault();
        var newName = nameForm.elements.name.value;
        dispatch ({
        type: 'addName',
        newName:  newName
    })

});