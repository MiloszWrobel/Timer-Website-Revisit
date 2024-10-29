import { useState } from "react";

export default function Player() {
  const [hasClicked, setHasClicked] = useState(false);
  const [name, setName] = useState("unkown entity");

  function handleClick() {
    setHasClicked((prevValue) => !prevValue);
  }

  function handleChange(event) {
    setHasClicked(false);
    setName(event.target.value);
  }
  return (
    <section id="player">
      <h2>Welcome {hasClicked ? name : "unkown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={name} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
