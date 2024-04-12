import { useState } from "react";

export default function Player() {
  const [name, setName] = useState(false);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setName(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section id="player">
      <h2>Welcome {input ? name : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
