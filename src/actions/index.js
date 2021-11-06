export const increment = () =>{
    return{
           type:'INCREMENT'
       }
};

export const incrementByFive =(val) =>{
    return{
        type:'INCREMENT_BY_5',
        payload:val
    };
};


export const decrement = () =>{
    return{
        type: 'DECREMENT'
    };
};

export const login = () =>{
    return{
        type: 'SIGN_IN'
    };
};
