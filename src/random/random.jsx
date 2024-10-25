import { useEffect, useState } from "react";
import MemesCard from "./card";
import Favorites from "./favorites";
import "./styles.css";

export default function Random() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [memes, setMemes] = useState([]);
  const [input, setInput] = useState("2");
  const [jokesToShow, setJokesToShow] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");

      const data = await response.json();

      if (data && data.data.memes) {
        setLoading(false);
        setMemes(data.data.memes);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  function renderRandomJokes() {
    const newValues = [];
    for (let i = 0; i < input; i++) {
      const random = Math.floor(Math.random() * memes.length);
      newValues.push(memes[random]);
      setJokesToShow(newValues);
    }
  }

  useEffect(() => {
    renderRandomJokes();
  }, [memes]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Favorites />
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={renderRandomJokes}>Get Jokes</button>

      {jokesToShow &&
        jokesToShow[0] !== undefined &&
        jokesToShow.map((item, index) => (
          <MemesCard key={index} jokes={item} />
        ))}
    </div>
  );
}
