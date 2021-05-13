import React, { useState } from "react";
import axios from "axios";
import { Button, LinearProgress } from "@material-ui/core";
import Title from "./Title";

function RequestEven() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  function ClickToRequest() {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setLoading(false);
        setUser(response.data.filter((item) => item.id % 2 === 0));
        console.log(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Assignment 4</h1>
      <Button
        className="Button"
        onClick={ClickToRequest}
        variant="contained"
        color="primary"
      >
        Send Request
      </Button>
      {loading ? <LinearProgress color="secondary" /> : ""}
      <div>
        {user.map(function (item) {
          return <Title key={item.id} title={item.title} />;
        })}
      </div>
    </div>
  );
}

export default RequestEven;
