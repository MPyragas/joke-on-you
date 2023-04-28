import useJokes from "./Hooks/usejokes";
import Single from "./Single";

function Jokes() {
    const [jokes, rldJokes] = useJokes();
    if(jokes === null) {
        return <h3>Loading...</h3>;
    }
    return <div className="main">
        <h1>Joke on You</h1>
        <button className="btn" onClick={rldJokes}>Reload jokes<span></span></button>
        {jokes.map((joke) => <Single key={joke.id} joke={joke} />)}
    </div>
}
export default Jokes;