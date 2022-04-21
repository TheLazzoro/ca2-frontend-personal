import React from "react";
import { useState, useEffect } from "react";
import { JOKES_ALL_URL } from "settings";
import { JOKE_ANIMAL_URL } from "settings";

export default function Body() {
  const [joke, setJoke] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [jokeAnimal, setJokeAnimal] = useState([]);
  const [jokesAll, setJokesAll] = useState([]);

  const getData = async () => {
    const res = await fetch(JOKE_ANIMAL_URL);
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
      let finishedJoke = data.jokeObj.value.replace(
        /Chuck Norris/gi,
        data.animalObj.name
      );
      setJoke(data.jokeObj.value);
      setAnimal(data.animalObj.name);
      setJokeAnimal(finishedJoke);

      const dataAll = await getDataJokesAll();
      let jokeHtml = "";
      dataAll.map( joke => jokeHtml += <p>${joke.value}</p>)
      setJokesAll(jokeHtml);
    })();
  }, []);

  return (
    <div>
      <div>
        <p>{joke}</p>
        <p>+</p>
        <p>{animal}</p>
        <p>=</p>
        <p>{jokeAnimal}</p>
        <p></p>
        <p>{jokesAll}</p>
      </div>
    </div>
  );
}
