const initState = {
    details : {},
}

const detailReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_DETAILS":
            return {...state,
                details : action.payload.details,
            }
        default :
            return {...state};
    }
}

export default detailReducer;
