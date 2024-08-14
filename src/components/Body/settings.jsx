import "./settings.css";
import trash from "../Body/Trash.png";
import backto from "../Body/BackTo.png";
export default function Settings({ handleDelete, handleBackTo }) {
  return (
    <div className="main">
      <div className="delete">
        <button className="bttn" onClick={handleDelete}>
          <img src={trash} alt="justimg" className="trash" />
          <p>Delete forever</p>
        </button>
      </div>
      <div className="delete">
        <button className="bttn" onClick={handleBackTo}>
          <img src={backto} alt="justimg" className="trash" />
          <p>Move Back To Do</p>
        </button>
      </div>
    </div>
  );
}
