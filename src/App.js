import React, { useEffect, useState } from "react";
import "./App.css";
import Ingredients from "./components/Ingredients/Ingredients";
import Recipe from "./components/Recipe/Recipe";
import clickRecipe from "./assets/img/clickRecipe1.png";

const App = () => {
    const APP_ID = "b5e14ff0";
    const API_KEY = "637d9996b64d8386a4f4932a92a4f8ab";

    const [recipies, setRecipies] = useState([]);
    const [search, setSearch] = useState("chicken");
    const [query, setQuery] = useState(search);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [service, setService] = useState("");
    const [source, setSource] = useState("");
    const [mealType, setMealType] = useState("");
    const [time, setTime] = useState("");
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        getRecipes();
    }, [query]);

    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

    const getRecipes = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        setRecipies(data.hits);
    };

    const getInputValue = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
    };
    const currentRecipe = (
        title,
        image,
        type,
        service,
        source,
        mealType,
        time,
        ingredients
    ) => {
        setTitle(title);
        setImage(image);
        setType(type);
        setService(service);
        setSource(source);
        setMealType(mealType);
        setTime(time);
        setIngredients(ingredients)
        
    };

    return (
        <div className="container">
            <div className="recipe-list">
                <div className="search">
                    <form onSubmit={getSearch}>
                        <input
                            type="text"
                            onChange={getInputValue}
                            placeholder={search}
                        />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>

                <ul className="list">
                    {recipies.map((recipe) => {
                        return (
                            <Recipe
                                key={recipe.recipe.label}
                                title={recipe.recipe.label}
                                image={recipe.recipe.image}
                                type={recipe.recipe.cuisineType}
                                service={recipe.recipe.yield}
                                source={recipe.recipe.source}
                                mealType={recipe.recipe.mealType}
                                time={recipe.recipe.totalTime}
                                ingredients={recipe.recipe.ingredientLines}
                                clicked={currentRecipe}
                            />
                        );
                    })}
                </ul>
            </div>
            <div className="ingredients">

                    {title !== '' ? <Ingredients
                    title={title}
                    image={image}
                    type={type}
                    service={service}
                    source={source}
                    mealType={mealType}
                    time={time}
                    ingredients={ingredients}
                /> : <div className='clickRecipe'>
                        <img src={clickRecipe} alt=''/>
                    </div>}

                
            </div>
        </div>
    );
};

export default App;
