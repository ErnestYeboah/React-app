import { useContext } from "react";
import { RandomContext } from "./context";

/* eslint-disable react/prop-types */
export default function MemesCard({ jokes }) {
  const { addToFavorites, favorites } = useContext(RandomContext);

  return (
    <div className="card">
      {jokes.name && <h1>{jokes.name}</h1>}
      <h2>{jokes.captions}</h2>
      <button onClick={() => addToFavorites(jokes)}>
        {" "}
        {favorites.findIndex((item) => item.id === jokes.id) !== -1
          ? "Remove from favorites"
          : "Add to favorites"}
      </button>
    </div>
  );
}
