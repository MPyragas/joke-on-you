function Single({joke}) {
    return <article>
        {joke.joke ? (<p className="singlejoke">{joke.joke}</p>) : (<div className="setdel"><p>{joke.setup}</p><p>{joke.delivery}</p></div>)}
        </article>;
}
export default Single;