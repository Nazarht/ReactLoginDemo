import React, { useState } from "react";
import Card from "../UI/Card";

import "./UserForm.css";

function UserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [setError, setValid] = props.onError;

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username.length === 0) {
        setError('Username should be non-empty');
        setValid(false);
        return;
    }
    if (age < 0 || age.length === 0) {
        setError(`Age can't be less than , or equal to 0`);
        setValid(false);
        return;
    }
    if (age > 111) {
        setError(`Too old!!!`);
        setValid(false);
        return;
    }
    const newUser = {
      username: username,
      age: age,
      id: Math.floor(Math.random() * 1000000),
    };
    props.onSubmit(newUser);
    setAge("");
    setUsername("");
  }



  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label id="username">Username</label>
        <input
          value={username}
          onChange={handleUsernameChange}
          type="text"
        ></input>
        <label>Age (Years)</label>
        <input value={age} type="number" onChange={handleAgeChange}></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default UserForm;
