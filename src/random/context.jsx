/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const RandomContext = createContext();

export default function RandomGlobalState({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem("Favorites"))
  );
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("Count"))
  );

  function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  useEffect(() => {
    saveToStorage("Count", count);
  }, [count]);
  useEffect(() => {
    saveToStorage("Favorites", favorites);
  }, [favorites]);

  function addToFavorites(currentJoke) {
    let cpyFavorites = [...favorites];
    const index = cpyFavorites.findIndex((item) => item.id === currentJoke.id);
    if (index === -1) {
      cpyFavorites.push(currentJoke);
      setCount((c) => c + 1);
    } else {
      cpyFavorites.splice(index, 1);
      setCount((c) => c - 1);
    }

    setFavorites(cpyFavorites);
  }

  console.log(favorites);

  return (
    <RandomContext.Provider
      value={{ isActive, setIsActive, addToFavorites, favorites, count }}
    >
      {children}
    </RandomContext.Provider>
  );
}
