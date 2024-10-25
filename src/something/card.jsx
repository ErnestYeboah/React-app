import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function MemesCard({ data }) {
  const [images, setImages] = useState("");
  function renderRandomJokes() {
    for (let i = 0; i < 1; i++) {
      const random = Math.floor(Math.random() * data.length);
      setImages(data[random]);
    }
  }

  useEffect(() => {
    renderRandomJokes();
  }, [data]);

  return (
    <div className="card">
      <img src={images.url} alt="" />
    </div>
  );
}
