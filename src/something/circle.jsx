import { nanoid } from "nanoid";
import "./styles.css";

export default function Circle() {
  function getElement(currentEl) {
    console.log(currentEl);
  }

  return (
    <div>
      {[...Array(7)].map((item, index) => (
        <h1
          key={nanoid()}
          className="h1"
          onClick={() => getElement(index)}
          id={nanoid()}
        >
          {index}
        </h1>
      ))}
    </div>
  );
}
