var stateInitital = { 
    error: {},
    users: [],
    loading:true,
};

const userReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return state;
        case 'FETCH_USERS_SUCCESS':
            return { 
                error: {},
                users: action.data,
                loading:false,
            }
        case 'FETCH_USERS_ERROR':
            let error =  action.error;
            return { 
                ...state,
                error
            };
        default:
            return state;
    }
}
export default userReducer;