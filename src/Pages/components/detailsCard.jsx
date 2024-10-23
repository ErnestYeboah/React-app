import { useContext } from "react";
import { GlobalContext } from "../context/context";

/* eslint-disable react/prop-types */
export default function DetailsCard({ details }) {
  const { favorites, saveToFavorites } = useContext(GlobalContext);
  return (
    <div className="details__card">
      <span>
        <img src={details.image_url} alt="" />
      </span>
      <div className="text">
        <h2>{details.publisher}</h2>
        <p>{details.title}</p>
        <button onClick={() => saveToFavorites(details)} className="save__btn">
          {favorites.findIndex((item) => item.id === details.id) !== -1
            ? "Remove From Favorites"
            : "Add to favorites"}
        </button>

        <ul>
          <h2>Ingredients</h2>

          {details &&
            details.ingredients &&
            details.ingredients.map((item, index) => (
              <li key={index}>
                {item.quantity} {item.unit} {item.description}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
