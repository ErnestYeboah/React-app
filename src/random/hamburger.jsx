import { useContext } from "react";
import { RandomContext } from "./context";

export default function Hamburger() {
  const { setIsActive, count } = useContext(RandomContext);

  return (
    <div>
      <button onClick={() => setIsActive((i) => !i)} className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {count > 0 && <h3 className="favotites__count">{count}</h3>}
    </div>
  );
}
