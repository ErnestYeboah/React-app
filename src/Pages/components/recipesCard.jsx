import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RecipesCard({ recipes }) {
  return (
    <div className="recipes__card">
      <span>
        <img src={recipes.image_url} height="100%" alt="" />
      </span>
      <h2>{recipes.publisher}</h2>
      <p>{recipes.title}</p>
      <Link to={`/recipe-item/${recipes.id}`} className="details__btn">
        Recipes Details
      </Link>
    </div>
  );
}
