import useJokes from "../Hooks/usejokes";
import Single from "../Single/Single";

function Jokes() {
    const [jokes] = useJokes();
    if(jokes === null) {
        return <h3>Loading...</h3>;
    }
    return <div className="main">
        {jokes.map((joke) => <Single key={joke.id} joke={joke} />)}
    </div>
}
export default Jokes;