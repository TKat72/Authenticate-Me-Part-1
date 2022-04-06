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


const deletePost = (id) => {

    return {
        type: DELETE_POST,
        id
    }
}

export const getAll = () => async (dispatch) => {
    const response = await csrfFetch('/api/posts');
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllPosts(data.posts))

    }

}
export const createNewPost = ({ userId, title, imgUrl, context, availability }) => async (dispatch) => {

    const response = await csrfFetch('/api/posts/new', {
        method: "POST",
        body: JSON.stringify({
            userId,
            title,
            imgUrl,
            context,
            availability
        }),
    });
    const data = await response.json();
    dispatch(addPost(data.post))
    return response;
}

export const removePost = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/posts/${id}`, {
        method: 'DELETE'
    })
    dispatch(deletePost(id));
    return response;

}

const initialState = {}

const postReducer = (state = initialState, action) => {

    let newState;
    console.log("action payloud ", action)
    switch (action.type) {
        case ADD_POST:
            newState = Object.assign({}, state);
            newState.post = action.payload;
            return newState;
        case DELETE_POST:
            newState = Object.assign({}, state);
            delete newState[action.id]

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
