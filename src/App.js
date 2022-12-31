import { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm/UserForm";
import UserOutput from "./Components/UserOutput/UserOutput";
import Modal from "./Components/UI/Modal";

function App() {
  const [users, setUsers] = useState([
    { username: "Nick", age: 25, id: "1" },
    { username: "Rick", age: 35, id: "2" },
    { username: "Drew", age: 33, id: "3" },
  ]);

  const [isValid, setIsValid] = useState(true);
  const [errorReason, setErrorReason] = useState('');

  function onSubmit(newUser) {
    setUsers((prevState) => {
      return [newUser , ...prevState]
    });
  }

  function onDelete(userId) {
    setUsers(users.filter((user) => {
     return user.id !== userId
    }))
  } 

  function onCloseModal() {
    setIsValid(true);
  }

  return (
    <div className="main">
      <UserForm onSubmit={onSubmit} onError={[setErrorReason, setIsValid]} />
      <UserOutput users={users} handleClick={onDelete}/>
      {!isValid && <Modal reason={errorReason} onClose={onCloseModal}/>}
    </div>
  );
}

export default App;
