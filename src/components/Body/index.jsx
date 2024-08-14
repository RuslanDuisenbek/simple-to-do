import "./index.css";
import * as React from "react";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import VectorImage from "../Body/Vector.png";
import Modul from "./Modul";
import { useState } from "react";
import Settings from "./settings";
import Trash from "./Trash";
export default function Body() {
  const [isOpen, setOpen] = useState(false);
  const [selectedTrashId, setSelectedTrashId] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState("active");
  const [isTrash, setTrash] = useState(false);
  const [todo, setToDO] = useState([
    {
      id: Date.now(),
      name: "Write essay",
      status: "active",
    },
    {
      id: Date.now() + 12,
      name: "Write essay",
      status: "active",
    },
    {
      id: Date.now() + 1,
      name: "make dinner",
      status: "done",
    },
  ]);
  function handleOpenSettings(item) {
    setSelectedTrashId((prev) => (prev === item.id ? "null" : item.id));
  }
  function handleOpen() {
    setOpen(!isOpen);
  }
  function handleDelete(index) {
    const new_item = todo.filter((val) => val.id !== index);
    setToDO(new_item);
  }
  function handleBackTo(index) {
    const newToDo = todo.map((val) =>
      val.id === index ? { ...val, status: "active" } : val
    );
    setToDO(newToDo);
  }
  function handleTrashClick() {
    setFilteredStatus("trash");
    setTrash(true);
    console.log("filter", filteredStatus);
  }
  function handleActiveClick() {
    changeStatus("active");
    setTrash(false);
  }
  function handleDoneClick() {
    changeStatus("done");
    setTrash(false);
  }
  function changeStatus(sta) {
    setFilteredStatus(sta);
  }
  const filteredTodos = todo.filter((item) => {
    if (filteredStatus == "done" && item.status == "done") {
      return item;
    }
    if (filteredStatus == "active" && item.status == "active") {
      return item;
    }
    if (filteredStatus == "trash" && item.status == "trash") {
      console.log("item", item);
      console.log("filter", filteredStatus);
      return item;
    }
  });
  return (
    <div className="container">
      <div className="buttons">
        <div className="three_buttons">
          <Button
            variant="outlined"
            sx={{ color: "black", borderColor: "black" }}
            onClick={handleActiveClick}
          >
            To Do
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "black", borderColor: "black" }}
            onClick={handleDoneClick}
          >
            Done
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "black", borderColor: "black" }}
            onClick={handleTrashClick}
          >
            Trash
          </Button>
        </div>
        {isOpen && (
          <Modul
            style={{ marginLeft: "50px" }}
            todo={todo}
            setToDO={setToDO}
            setOpen={setOpen}
          />
        )}
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          sx={{ color: "black", borderColor: "black" }}
          onClick={handleOpen}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <div>
        <p className="title_todo">To Do</p>
        <hr></hr>
      </div>
      <div className="lists">
        {filteredTodos.map((item, index) => (
          <div className="list">
            <div key={item.id} className="topic">
              <button
                className="setting"
                onClick={() => handleOpenSettings(item)}
              >
                <img src={VectorImage} alt="huynya" />
              </button>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={item.name}
              />
            </div>
            <div>
              {isTrash && selectedTrashId == item.id && (
                <Settings
                  handleDelete={() => handleDelete(item.id)}
                  handleBackTo={() => handleBackTo(item.id)}
                />
              )}
            </div>
            <div>
              {!isTrash && selectedTrashId == item.id && (
                <Trash handleDelete={() => handleDelete(item.id)} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
