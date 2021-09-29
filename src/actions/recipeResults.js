import {getRandom, getSearched, getDetails} from '../api';
import axios from 'axios';

export const randomDishes = () => async(dispatch) => {
    //FETCHING FROM AXIOS
    const randomDishes = await axios.get(getRandom());

    dispatch({
        type : "FETCH_RANDOM",
        payload : {
            random : randomDishes.data.recipes,
        }
    })
}

export const searchedDishes = (item) => async(dispatch) => {

    const searchedDishes = await axios.get(getSearched(item));

    dispatch({
        type : "FETCH_SEARCHED",
        payload : {
            searched : searchedDishes.data.results,
        }
    })
}

export const dishDetail = (id) => async (dispatch) => {
    const details = await axios.get(getDetails(id));

    dispatch({
        type : "FETCH_DETAILS",
        payload : {
            details : details.data
        }
    })
}