import { useState } from "react";

const AddScoreForm = ({ onAddScore }) => {
  const [score, setScore] = useState(0);

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddScore({ score, username });
    setScore(0);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Mettez un score : </h3>
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
        placeholder="Score"
        max={10}
        min={0}
      />
      <br />
      <h3>Mettez votre pseudo</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button type="submit">Add Score</button>
    </form>
  );
};

export default AddScoreForm;
