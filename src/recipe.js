import React from "react";
import style from "./recipe.module.css";

const recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img src={image} className={style.image} alt="" />
      <h3>{title}</h3>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
    </div>
  );
};

export default recipe;
