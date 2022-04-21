import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

export const LoggedIn = ({logout}) => {
    const [dataFromServer, setDataFromServer] = useState("Loading...");
  
    useEffect(() => {
      facade.fetchData().then((data) => setDataFromServer(data.msg));
    }, []);
  
    return (
      <div>
        <h2>Welcome to the Chuck Norris Joke Center</h2>
        <p>{dataFromServer}</p>
        <button onClick={logout}>Logout</button>
        <h3>Chuck Norris' name is replaced by a random animal and stored.</h3>
      </div>
    );
  }