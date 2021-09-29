import React, {useEffect} from 'react';
import Recipe from './Recipe';
import Shadow from './Shadow';
import { useSelector, useDispatch } from 'react-redux';
import {randomDishes} from '../actions/recipeResults';
import {useLocation} from 'react-router-dom';

const Home = () => {

    const dummy = "https://spoonacular.com/recipeImages/471334-312x231.jpg";
    const location = useLocation();
    const pathId = location.pathname.split("/")[1];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(randomDishes());
    }, [dispatch]);

    const {random, searched} = useSelector(state => state.dishes);
    
    return(
        <div class="home">
            { pathId && <Shadow/> }
            {!!searched.length && (<div className="dishes">
                <h2 className="head" >Searched Results</h2>
                <div className="dish-list">
                    {
                        searched.map(recipe => (
                            <Recipe image={recipe.image || dummy } key={recipe.id} title={recipe.title} id={recipe.id} />
                        ))
                    }
                </div>
            </div>)}
            <div className="dishes">
                <h2 className="head" >Few Recipes</h2>
                <div className="dish-list">
                    {
                        random.map(recipe => (
                            <Recipe image={recipe.image} key={recipe.id} title={recipe.title} id={recipe.id}  />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;