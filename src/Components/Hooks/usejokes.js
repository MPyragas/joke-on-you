import { useEffect, useState } from "react";

function useJokes() {
  const URL = "https://v2.jokeapi.dev/joke/Programming?amount=10";
  const [jokes, setJokes] = useState(null);
  const [lastUpdTime, setLastUpdTime] = useState(null);
  const rldJokes = () => {
    setLastUpdTime(Date.now());
  };
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJokes(data.jokes);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [lastUpdTime]);
  return [jokes, rldJokes];
}
export default useJokes;
