var stateInitital = { 
    error: {},
    tasks: [],
    loading:true,
};

const taskReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_TASKS_REQUEST':
            return state;
        case 'FETCH_TASKS_SUCCESS':
            let tasks = action.data;
            return { 
                error: [],
                tasks: tasks,
                loading:false,
            }
        case 'POST_TASKS_SUCCESS':
            return { 
                ...state,
                tasks:state.tasks.concat(action.data)
            }
        case 'POST_TASKS_ERROR':
            let error =  action.error;
            return { 
                ...state,
                error
            };
        default:
            return state;
    }
}
export default taskReducer;