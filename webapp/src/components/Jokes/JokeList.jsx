import { Context } from "contexts/Context";
import { useContext } from "react";
import Joke from "./Joke";

const JokeList = () => {
  const { jokes } = useContext(Context);

  return (
    <div className="jokes">
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
