import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import 'style.css'
import { Body } from "Body";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Chuck Norris Joke Center</h2>
      <form onChange={onChange}>
        <div>
          <div>
            <input placeholder="User Name" id="username" />
          </div>
          <div>
            <input placeholder="Password" type="password" id="password" />
          </div>
        </div>
        <button onClick={performLogin}>Login</button>
        <div>
          <br/>
          <br/>
          <p>Student: Lasse Dam</p>
          <p>
            Changes in this version that aren't in the group version:<br/>
            1. Chuck Norris jokes now have his name replaced with an animal in the backend<br/>
                as opposed to the frontend.<br/>
            2. Generated Chuck Norris jokes are now stored in the database every time a user logs in.<br/>
            3. A list of all stored jokes is now displayed when a user logs in.
            <br/>
            <br/>
            <br/>
            <br/>
            Psst... username: user, password: MyPassword
          </p>
        </div>
      </form>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <Body logout={logout} />
        </div>
      )}
    </div>
  );
}
export default App;
