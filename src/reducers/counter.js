const counterReducer = (state = 0, action)=>{
    switch (action.type){
        case 'INCREMENT_BY_5':
            return state + action.payload
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export default counterReducer;
