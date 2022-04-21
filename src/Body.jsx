import { LoggedIn } from "LoggedIn";
import React from "react";
import { useState, useEffect } from "react";
import { JOKE_CONVERTED_URL } from "settings";
import { JOKES_ALL_URL } from "settings";
import { JOKE_ANIMAL_URL } from "settings";

export const Body = ({ logout }) => {
  const [joke, setJoke] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [jokeAnimal, setJokeAnimal] = useState([]);
  const [jokesAll, setJokesAll] = useState([]);

  const getData = async () => {
    const res = await fetch(JOKE_CONVERTED_URL);
    const json = await res.json();
    return json;
  };

  const getDataJokesAll = async () => {
    const res = await fetch(JOKES_ALL_URL);
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    (async () => {
      const data = await getData();
      let joke = data.value;
      setJoke(joke);
      const dataAll = await getDataJokesAll();
      setJokesAll(dataAll);
    })();
  }, []);

  return (
    <div>
      <div className="split left">
        <LoggedIn logout={logout} />
        <p>{joke}</p>
        <p></p>
      </div>
      <div className="split right">
        <h2>Joke Collection</h2>
        <table>
          <tr>
            <th>Jokes (Total: {jokesAll.length})</th>
          </tr>
          <tr>
            {jokesAll.map((joke) => (
              <tr>
                <td>{joke.value}</td>
              </tr>
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
};
