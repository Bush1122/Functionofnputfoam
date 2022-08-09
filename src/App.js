import { useState } from "react";
import "./styles.css";

export default function App() {
  const [headingtext, SetHeadingtext] = useState();
  const [isMouseover, SetisMouseover] = useState(false);
  const [name, SetName] = useState("");

  function handleClick(event) {
    SetHeadingtext(name);

    event.preventDefault();
  }

  function handleMouseover() {
    SetisMouseover(true);
  }
  function handleMouseout() {
    SetisMouseover(false);
  }
  function handleChange(event) {
    SetName(event.target.value);
  }

  return (
    <form onSubmit={handleClick}>
      <h3>{headingtext}</h3>

      <label for="username" />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Email or Phone"
        id="username"
      />

      <label for="password" Password />
      <input type="password" placeholder="Password" id="password" />

      <button
        type="submit"
        style={{ background: isMouseover ? "Yellow" : "White" }}
        onClick={handleClick}
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
      >
        Log In
      </button>
    </form>
  );
}
