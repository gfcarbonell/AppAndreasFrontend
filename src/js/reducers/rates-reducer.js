var stateInitital = { 
    error: [],
    rates: [],
    loading:true,
};

const rateReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_RATES_SUCCESS':
            let rates = action.data;
            return { 
                error: [],
                rates: rates,
                loading:false,
            }
        case 'FETCH_RATES_ERROR':
            let error =  action.error;
            return { 
                ...state,
                error
            };
        default:
            return state;
    }
}

export default rateReducer;