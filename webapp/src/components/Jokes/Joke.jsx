import { Link } from "react-router-dom";

const Joke = ({ joke }) => {
  return (
    <div className="joke">
      <h3>Question : {joke.question}</h3>
      <h3>Reponse :{joke.answer}</h3>

      <p>Category {joke.category}</p>

      <Link to={`/jokes/${joke.id}`}>
        Voir Plus d'information sur la blague
      </Link>
    </div>
  );
};

export default Joke;
