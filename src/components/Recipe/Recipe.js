import React from "react";
import "./Recipe.css";

const Recipe = ({
    title,
    image,
    type,
    service,
    source,
    mealType,
    time,
    ingredients,
    clicked,
}) => {
    const add = (title, image, type, service, source, mealType, time,ingredients) => {
        clicked(title, image, type, service, source, mealType, time,ingredients);
    };

    return (
        <li
            className="list-item"
            onClick={() =>
                add(title, image, type, service, source, mealType, time,ingredients)
            }
        >
            <img src={image} alt="" />
            <div className="about">
                <div className="recipe-name">{title}</div>
                <div className="recipe-status">{type}</div>
            </div>
        </li>
    );
};

export default Recipe;
