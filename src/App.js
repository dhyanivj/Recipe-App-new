import React, { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "./recipe";

export default function App() {
  const APP_ID = "d83c9e2d";
  const APP_KEY = "d6dc0d2249672846c4a5c3e109c7300f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("noodles");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="form-wrapper">
        <h2 className="App-Name">Frupe.</h2>
        <p>A fruit recipe search App </p>
        <form className="search-form" onSubmit={getSearch}>
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="search-button">
            {" "}
            search{" "}
          </button>
        </form>{" "}
      </div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
