import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "contexts/Context";
import AddScoreForm from "./AddScoreForm";
const InformationJoke = () => {
  const { id } = useParams();

  const [joke, setJokes] = useState(null);

  const { getJokeWithScores, addingScore } = useContext(Context);



  const fetchData = async () => {
    const joke = getJokeWithScores(id);
    setJokes(joke);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!joke) {
    return <div>Loading...</div>;
  }

  const handleAddScore = async (data) => {
    const newScore = {
      score: data.score,
      username: data.username,
      joke: joke.id,
    };
    console.log({ newScore });
    await addingScore(newScore);
    fetchData();
  };
  return (
    <div>
      <h1>InformationJoke</h1>

      <h3>Question : {joke.question}</h3>
      <h3>Reponse :{joke.answer}</h3>
      <p>Category {joke.category}</p>
      <p>Score Count {joke.scoreCount}</p>
      <p>Score Average {joke.scoreAverage}</p>

      <h2>Les scores</h2>
      {joke.scores.map((score) => (
        <div key={score.id}>
          <p>
            Score {score.score} par {score.username}
          </p>
        </div>
      ))}

      <h3>Ajoutez un score</h3>
      <AddScoreForm onAddScore={handleAddScore} />
    </div>
  );
};

export default InformationJoke;
