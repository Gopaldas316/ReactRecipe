import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {dishDetail} from '../actions/recipeResults';

const Recipe = ({image, title,id}) => {

    const dispatch = useDispatch();

    const detailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(dishDetail(id));
    }    

    return(
            <div className="dish-item" onClick={detailHandler}>
                <Link to={`/${id}`} style={{ textDecoration: 'none', color : 'black' }}>
                    <img src={image} alt="recipe-item" />
                    <h4>{title}</h4>
                </Link>
            </div>
    );
}

export default Recipe;