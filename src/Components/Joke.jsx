import useJokes from "./Hooks/usejokes";
import Single from "./Single";

function Jokes() {
    const [jokes, rldJokes] = useJokes();
    if(jokes === null) {
        return <h3>Loading...</h3>;
    }
    return <div className="main">
        <button onClick={rldJokes}>Reload jokes</button>
        {jokes.map((joke) => <Single key={joke.id} joke={joke} />)}
    </div>
}
export default Jokes;