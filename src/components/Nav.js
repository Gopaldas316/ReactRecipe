import React, {useState} from 'react';

import {searchedDishes} from '../actions/recipeResults';
 
import {useDispatch} from 'react-redux';

const Nav = () => {

    const dispatch = useDispatch();
    
    const [data, setData] = useState('');

    const inputHandler = (e) => {
        e.preventDefault();
        setData(data);
        dispatch(searchedDishes(data));
        setData("");
    }

    const dataHandler = (e) => {
        setData(e.target.value);
    }

    return(
        <div className = "nav">
            <div className="logo">
                <h1>Ristorante</h1>
            </div>
            <form onSubmit={inputHandler}>
                <input type="text" className="form-input" onChange={dataHandler} value={data} />
                <button type="submit" className="form-btn"><i class="fas fa-search"></i></button>
            </form>
        </div>
    );
}

export default Nav;