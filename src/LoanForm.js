import "./FormStyles.css";
import "./Modal.js";
import Modal from "./Modal.js";

export default function LoanForm() {
  return (
    <div
      className="flex"
      style={{ backgroundColor: "blue", flexDirection: "column" }}
    >
      <h1>Loan Form</h1>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <label>name:</label>
        <input type="text" />

        <label>phone:</label>
        <input type="number" />

        <label>age:</label>
        <input type="number" />

        <label>Are You An Employee:</label>
        <input type="checkbox" />

        <label>salary:</label>
        <select>
          <option>less than 500$</option>
          <option>between than 500$ and 1000$</option>
          <option>more than 1000$</option>
        </select>

        <button id="submit-loan-btn">submit</button>
      </form>
      <Modal></Modal>
    </div>
  );
}
