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
      <h2>Login</h2>
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
