import { csrfFetch } from './csrf'

const ADD_POST = 'posts/addPost'
const DELETE_POST = 'posts/deletePost'
const GET_ALL_POSTS = 'posts/getAllPost'

const getAllPosts = (posts) => {
    return {
        type: GET_ALL_POSTS,
        payload: posts
    }
}


const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post,
    }
}


const deletePost = () => {
    return {
        type: DELETE_POST,

    }
}

export const getAll = () => async (dispatch) => {
    const response = await csrfFetch('/api/posts');
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllPosts(data.posts))

    }

}

const initialState = {}

const postReducer = (state = initialState, action) => {

    let newState;
    let newEnty;
    switch (action.type) {
        case ADD_POST:
            newState = Object.assign({}, state);
            newState.post = action.payload;
            return newState;
        case DELETE_POST:
            newState = Object.assign({}, state);
            newState.post = null;
            return newState;
        case GET_ALL_POSTS:
            newState = { ...state };
            action.payload.forEach((post) => {
                newState[post.id] = post;
            });
            return {
                ...newState,
                ...state,

            };
        default:
            return state;
    }
}
export default postReducer;
