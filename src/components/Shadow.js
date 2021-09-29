import React from 'react';

import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Shadow = () => {

    const history = useHistory();
    const exitEventHandler = (e) => {
        if(e.target.classList.contains('card-shadow')){
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }

    const anotherExit = () => {
        document.body.style.overflow = 'auto';
        history.push('/');
    }
    const details = useSelector(state => state.dishDetails.details);

    return (
        <div className="card-shadow" onClick={exitEventHandler}>
            <div class="close" onClick={anotherExit}><i class="fas fa-times fa-2x"></i></div>
            <div className="detail">
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
                <div className="footer">
                    <button className="btn recipe"><a href={details.sourceUrl} target="_blank" >Recipe</a></button>
                    <div className="block"></div>
                    { (details.vegan === true) ? (<div className="vegan btn">Vegan</div>)  : ( details.vegetarian && <div className="btn not-vegan">Not Vegan</div>)}
                    { details.vegetarian ? (<div className="veg btn">Veg</div> )  :
                    <div className="non-veg btn">Non-Veg</div>}
                </div>
            </div>
        </div>
    )
}

export default Shadow;