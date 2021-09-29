const initState = {
    searched : [],
    random : [],
}

const dishReducer = (state = initState, action) => {

    switch(action.type)
    {
        case "FETCH_RANDOM":
            return {...state, 
                random : action.payload.random,}
        case "FETCH_SEARCHED":
            return {...state, searched : action.payload.searched};
        default :
        return {...state};
    }
}

export default dishReducer;