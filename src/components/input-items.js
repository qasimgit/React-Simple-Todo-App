import React, { useState } from "react";

export const Inptems = () => {
  const [input, setInput] = useState("");
  const [list, setLists] = useState([]);

  const inputValue = (event) => {
    setInput(event.target.value);
  };

  const listItems = () => {
    if (input !== "") {
      setLists((oldItems) => {
        return [input, ...oldItems];
      });
    } else {
      alert("Please Enter Something");
    }
  };

  const submitOnEnter = (event) => {
    if (event.charCode === 13) {
      if (input !== "") {
        listItems();
        setInput("");
      } else {
        alert("Please Enter something");
      }
    }
  };

  return (
    <div>
      <div className="inputdiv2">
        <label htmlFor="task"> Tasks </label>
        <input
          type="text"
          placeholder="Please Enter the task here"
          onChange={inputValue}
          onKeyPress={submitOnEnter}
          value={input}
        />
        <button className="plus" onClick={listItems}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <div>
        <ul>
          {list.map((value) => {
            return (
              <div className="listdiv">
                <li>{value}</li>
                <button className='cross'>
                  <i className="fa fa-times"></i>
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
