import React from "react";
import style from "./recipe.module.css";

const recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img src={image} className={style.image} alt="" />
      <div className={style.title}>
        <h3>{title}</h3>
      </div>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>
        <p>
          <b>Calories : </b>
          {calories}
        </p>
      </p>
    </div>
  );
};

export default recipe;
