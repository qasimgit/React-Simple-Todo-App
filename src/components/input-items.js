import React, { useState } from "react";

export const Inptems = () => {
  const [input, setInput] = useState("");
  const [list, setLists] = useState([]);

  const inputValue = (event) => {
    setInput(event.target.value);
  };

  const listItems = () => {
    setLists((oldItems) => {
      input.toUpperCase();
      return [input, ...oldItems];
    });
  };

  const submitOnEnter = (event) => {
    if (event.charCode === 13) {
      listItems();
    }
  };

  return (
    <div>
      <label htmlFor="task"> Tasks </label>
      <input
        type="text"
        placeholder="Please Enter the task here"
        onChange={inputValue}
        onKeyPress={submitOnEnter}
      />
      <button className="btn" onClick={listItems}>
        <i className="fa fa-plus">Button</i>
      </button>

      <ul>
        {list.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
    </div>
  );
};
