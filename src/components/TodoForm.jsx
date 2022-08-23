// something to do with forms
import { useState } from "react";

export default function TodoForm(props) {
  let audio = new Audio(
    `https://www.myinstants.com/media/sounds/noot_p0CPOIz.mp3`
  );

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    audio.play();

    props.onSubmit({
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        value={input}
        onChange={handleChange}
        placeholder="something"
      />
      <button type="submit" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
}
