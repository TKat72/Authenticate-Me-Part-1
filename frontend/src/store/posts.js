import { csrfFetch } from './csrf'

const ADD_POST = 'posts/addPost'
const DELETE_POST = 'posts/deletePost'
const GET_ALL_POSTS = 'posts/getAllPost'
const UPDATE_POST = 'posts/updateOnePost'

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
const updateOnePost = (id, post) => {
    return {
        type: UPDATE_POST,
        id,
        payload: post
    }

}

const deletePost = (id) => {

    return {
        type: DELETE_POST,
        payload: id
    }
}

export const getAll = () => async (dispatch) => {
    const response = await csrfFetch('/api/posts');
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllPosts(data.posts))

    }

}
export const updatePost = ({ id, post }) => async (dispatch) => {
    const { userid,title, imgUrl, context, availability } = post;
    const response = await csrfFetch(`/api/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title,
            imgUrl,
            context,
            availability
        })

    })
    if (response.ok) {
        const data = await response.json()
        dispatch(updateOnePost(id, post))
        return response;
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
    let data = await response.json();
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


    switch (action.type) {
        case ADD_POST: {
            let post = action.payload
            newState = Object.assign({}, state);
            newState[post.id] = post;// post{1:{post1 info},2:{post2 info}}
            return newState;
        }
        case DELETE_POST:
            newState = Object.assign({}, state);
            delete newState[action.payload];
            return newState;
        case GET_ALL_POSTS:
            // newState = {}
            newState = { ...state };
            action.payload.forEach((post) => {
                newState[post.id] = post;
            });

            return {
                ...newState,
                ...state,

            };
        case UPDATE_POST: {
            let post = action.payload
            newState = { ...state };
            newState[action.id] = post;
            return newState;
        }
        default:
            return state;
    }
}
export default postReducer;
