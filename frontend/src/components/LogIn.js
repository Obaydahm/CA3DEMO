import React, { useState } from "react";
function LogIn(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const login = evt => {
    evt.preventDefault();
    props.login(user.username, user.password);
  };
  const onChange = evt => {
    user[evt.target.id] = evt.target.value;
    setUser({ ...user });
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login} onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button>Login</button>
      </form>
      {JSON.stringify(user)}
    </div>
  );
}
export default LogIn;
