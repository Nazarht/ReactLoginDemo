import React from "react";
import Card from "../UI/Card";
import UserHolder from "./UserHolder";
import "./UserOutput.css";

function UserOutput(props) {
  return (
    <Card className="user-output">
      {props.users.length !== 0 ? (
        props.users.map((user) => {
          return (
            <UserHolder
              name={user.username}
              age={user.age}
              key={user.id}
              handleClick={props.handleClick}
              id={user.id}
            />
          );
        })
      ) : (
        <p>No users!</p>
      )}
    </Card>
  );
}

export default UserOutput;
