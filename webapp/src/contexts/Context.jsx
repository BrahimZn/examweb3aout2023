import { createContext, useEffect, useState } from "react";

import { getAllJokes } from "../services/jokeApi";
import { getAllScores , addScore } from "../services/scoreApi";

const Context = createContext(null);

const ProviderWrapper = ({ children }) => {
  const [jokes, setJokes] = useState([]);

  const [scores, setScores] = useState([]);

  const [jokesFormatted, setJokesFormatted] = useState([]);

  const getAllInfo = async () => {
    const AllJokesFetched = await getAllJokes();
    setJokes(AllJokesFetched);

    const AllScoresFetched = await getAllScores();
    setScores(AllScoresFetched);

    console.log({ AllJokesFetched, AllScoresFetched });

    const jokesToFormat = AllJokesFetched.map((joke) => {
      const scoresOfJoke = AllScoresFetched.filter(
        (score) => score.joke === joke.id
      );

      const scoreCount = scoresOfJoke.length;
      let scoreSum = 0;
      for (let i = 0; i < scoresOfJoke.length; i++) {
        scoreSum += scoresOfJoke[i].score;
      }

      const scoreAverage = scoreSum / scoreCount;

      return {
        ...joke,
        scoreCount,
        scoreAverage,
        scores: [...scoresOfJoke],
      };
    });
    
    console.log({ jokesToFormat });

    setJokesFormatted(jokesToFormat);
  };

  useEffect(() => {
    
    getAllInfo();
  }, []);

  const getJokeWithScores = (id) => {
    const joke = jokesFormatted.find((joke) => joke.id === id);
    return joke;
  };

  const addingScore = async (score) => {
   
    await addScore(score);
    await getAllInfo();
  }

  const exposed = {
    jokes: jokesFormatted,
    scores,
    getJokeWithScores,
    addingScore,
  };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export { ProviderWrapper, Context };
