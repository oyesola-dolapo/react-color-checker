import React from "react";
import styles from "./ColorCard.module.css";
import { useState } from "react";

const ColorCard = ({ currentColor, updateColor }) => {
  const [inputValue, setInputValue] = useState("");
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    updateColor(inputValue);
  };
  return (
    <div className={`shadow-lg bg-white py-6 px-2 w-96 rounded mx-6`}>
      <p className={`text-center mb-2 text-xl font-medium`}>
        Input color code/name
      </p>
      <form
        action=""
        className={` w-full flex flex-col items-center gap-2`}
        onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Color code/name"
          className={`color-input border-2 border-solid border-black-100 p-2 rounded w-4/5 my-2`}
          value={inputValue}
          onChange={inputChange}
        />
        <h1 className={`font-medium text-lg`}>
          Color: &nbsp;
          <span
            style={{
              color: currentColor === "#ffffff" ? "#000000" : currentColor,
            }}>
            {inputValue === "" ? "#ffffff" : inputValue}
          </span>
        </h1>
        <button
          type="submit"
          className="btn btn-primary w-max bg-white shadow-lg p-2 px-4 border-2 border-solid border-black-100 text-md font-bold rounded mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ColorCard;
