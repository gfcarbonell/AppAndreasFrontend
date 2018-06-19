var stateInitital = { 
    error: [],
    loading:true,
};

const authenticateReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_LOGIN_REQUEST':
            return state;
        case 'FETCH_SESSION':
            let loading = action.loading
            return {
                ...state, 
                loading
            }
        case 'FETCH_LOGIN_ERROR':
            let error = action.error;
            return { 
                ...state,
                error
            }
        default:
            return state;
    }
}
export default authenticateReducer;

