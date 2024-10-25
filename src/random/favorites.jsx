import { useContext } from "react";
import { RandomContext } from "./context";
import MemesCard from "./card";

export default function Favorites() {
  const { isActive, favorites } = useContext(RandomContext);

  return (
    <div className={isActive ? "favorites active " : "favorites"}>
      {favorites &&
        favorites.map((item, index) => <MemesCard key={index} jokes={item} />)}
    </div>
  );
}
