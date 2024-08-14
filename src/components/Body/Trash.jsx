import trash from "../Body/Trash.png";
import "./settings.css";
export default function Trash({ handleDelete }) {
  return (
    <div className="delete">
      <button className="bttn" onClick={handleDelete}>
        <img src={trash} alt="justimg" className="trash" />
        <p>Move to Trash</p>
      </button>
    </div>
  );
}
