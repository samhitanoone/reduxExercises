const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

document.getElementById('sortLikes')
    .addEventListener('click', e => dispatch ({
        type: 'sort', sortBy: 'likes'
    }));


document.getElementById('sortRetweets')
    .addEventListener('click', e => dispatch ({
        type: 'sort', sortBy: 'retweets'
    }));

document.getElementById('sortReplies')
    .addEventListener('click', e => dispatch ({
        type: 'sort', sortBy: 'replies'
    }));