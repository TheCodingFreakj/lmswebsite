import React from "react";
import "./style.css";
const Goals = () => {
  const [fields, setFields] = React.useState([{ value: null }]);
  const [fields2, setFields2] = React.useState([{ value2: null }]);
  const [fields3, setFields3] = React.useState([{ value3: null }]);
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  function handleChange2(i, event) {
    const values2 = [...fields2];
    values2[i].value2 = event.target.value2;
    setFields(values2);
  }

  function handleAdd2() {
    const values2 = [...fields2];
    values2.push({ value2: null });
    setFields2(values2);
  }

  function handleRemove2(i) {
    const values2 = [...fields2];
    values2.splice(i, 1);
    setFields2(values2);
  }

  function handleChange3(i, event) {
    const values3 = [...fields3];
    values3[i].value3 = event.target.value3;
    setFields3(values3);
  }

  function handleAdd3() {
    const values3 = [...fields3];
    values3.push({ value3: null });
    setFields3(values3);
  }

  function handleRemove3(i) {
    const values3 = [...fields3];
    values3.splice(i, 1);
    setFields3(values3);
  }
  return (
    <div>
      <h1>Give the Target Audience Feature</h1>
      <p>
        The descriptions you write here will help students decide if your course
        is the one for them.
      </p>

      <p>What will students learn in your course?</p>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <button
              className="btn_page2"
              type="button"
              onClick={() => handleRemove(idx)}
            >
              X
            </button>
          </div>
        );
      })}

      <button
        className="btn_page2 side"
        type="button"
        onClick={() => handleAdd()}
      >
        +
      </button>

      <p>What will students learn in your course?</p>

      {fields2.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              value2={field.value2 || ""}
              onChange={(e) => handleChange2(idx, e)}
            />
            <button
              className="btn_page2"
              type="button"
              onClick={() => handleRemove2(idx)}
            >
              X
            </button>
          </div>
        );
      })}

      <button
        className="btn_page2 side"
        type="button"
        onClick={() => handleAdd2()}
      >
        +
      </button>

      <p>What will students learn in your course?</p>

      {fields3.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              value3={field.value3 || ""}
              onChange={(e) => handleChange3(idx, e)}
            />
            <button
              className="btn_page2"
              type="button"
              onClick={() => handleRemove3(idx)}
            >
              X
            </button>
          </div>
        );
      })}

      <button
        className="btn_page2 side"
        type="button"
        onClick={() => handleAdd3()}
      >
        +
      </button>
    </div>
  );
};

export default Goals;
//https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs
