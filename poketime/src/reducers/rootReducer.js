const initState = {
    posts: [
        {id: '1', title: 'Mukesh', body: 'loremipsum loremipsum  loremipsum loremipsum loremipsum loremipsum loremipsum '},
        {id: '2', title: 'Ajay', body: 'loremipsum loremipsum  loremipsum loremipsum loremipsum loremipsum loremipsum '},
        {id: '3', title: 'Sita', body: 'loremipsum loremipsum  loremipsum loremipsum loremipsum loremipsum loremipsum '}
    ]
}

const rootReducer = (state=initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}
export default rootReducer