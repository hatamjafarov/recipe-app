import React from "react";
import "./Ingredients.css";
import noImage from "../../assets/img/noimage.png";

const Ingredients = ({
    title,
    image,
    type,
    service,
    source,
    mealType,
    time,
    ingredients
}) => {
    return (
        <div className="ingredients-component">
            <div className="recipe-detail">
                <div className="recipe-detail-text">
                    <h2>{title}</h2>
                    <p className="cousine-type">
                        Cuisine type: <span>{type}</span>
                    </p>
                    <p className="meal-type">
                        Meal type: <span>{mealType}</span>
                    </p>
                    <p className="source">
                        Source: <span>{source}</span>
                    </p>
                </div>

                <div className="recipe-img">
                    <img src={image ? image : noImage} alt="" />
                </div>
            </div>

            <div className="recipe-time-serving">
                <ul>
                    <li>
                        <div>
                            <i className="far fa-clock"></i>
                            <span>{time}</span>
                        </div>
                        <p>Minutes</p>
                    </li>
                    <li>
                        <div>
                            <i className="fas fa-list-ol"></i>
                            <span>{ingredients.length}</span>
                        </div>
                        <p>Ingredients</p>
                    </li>
                    <li>
                        <div>
                            <i className="fas fa-user-alt"></i>
                            <span>{service}</span>
                        </div>
                        <p>Serving</p>
                    </li>
                </ul>
            </div>

            <div className="recipe-ingredients">
                <h1 className="recipe-ingredients-head">INGREDIENTS</h1>
                <div className="ingredients-list">
                    <ul>
                        {ingredients.map((ingredient) => {
                            return (
                                <li key={ingredient}>
                                    <i className="fas fa-check"></i>
                                    <span>{ingredient}</span>
                                </li>
                            );
                        })}

                        {/* <li>
                            <i className="fas fa-check"></i>
                            <span>apple 1 spoon</span>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <span>apple 1 spoon</span>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Ingredients;
