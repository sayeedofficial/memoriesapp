const { default: Posts } = require( "../components/Posts/posts" );

const reducer = (state,action) =>
{
    switch ( action.type) {
        case "FETCH_ALL":
            return state;
        case "CREATE":
            return Posts;
    
        default:
            return Posts
    }
    
}