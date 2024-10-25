import { useEffect, useState } from "react";
import MemesCard from "./card";

export default function JokeGenerator() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [memes, setMemes] = useState("");

  async function fetchJokesData() {
    setLoading(true);
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();

      if (data && data.data.memes) {
        setMemes(data.data.memes);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJokesData();
  }, []);

  return (
    <div>
      {memes && <MemesCard data={memes} />}
      <button onClick={fetchJokesData}>Get new mem</button>
    </div>
  );
}
