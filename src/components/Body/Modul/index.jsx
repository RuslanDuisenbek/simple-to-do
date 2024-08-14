import { Button } from "@mui/material";
import React, { useState } from "react";
export default function Modul({ todo, setToDO, setOpen }) {
  const [todo_new, setTodoNew] = useState("");
  function addTodo() {
    if (todo_new.length >= 1) {
      const newTD = { id: Date.now(), name: todo_new, status: "active" };

      setToDO([...todo, newTD]);
      setTodoNew("");
      setOpen(false);
    } else {
      setOpen(false);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: 268,
        height: 234,
        backgroundColor: "#E4E6E7",
        borderRadius: 12,
        position: "absolute",
        top: 28,
        left: "24.5%",
        marginLeft: 530,
      }}
    >
      <h4
        style={{
          marginLeft: -115,
        }}
      >
        Add New To Do
      </h4>
      <input
        style={{
          width: 170,
          height: 110,
          border: 0,
          borderRadius: 15,
          paddingLeft: "10px",
          textAlign: "left",
          fontSize: "16px",
          marginLeft: 19,
        }}
        value={todo_new}
        onChange={(event) => {
          setTodoNew(event.target.value);
        }}
        placeholder="Your Text"
      ></input>
      <Button
        variant="outlined"
        sx={{ color: "black", border: "none", width: 76, height: 40 }}
        onClick={addTodo}
      >
        Add
      </Button>
    </div>
  );
}
