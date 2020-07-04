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
        let obj = {
          id: Date.now(),
          title: input,
        };
        return [obj, ...oldItems];
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

  const deleteItem = (id) => {
    setLists((oldItems) => {
      return oldItems.filter((val) => val.id !== id);
    });
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
          {list.map((value, idx) => {
            return (
              <div className="listdiv">
                <li>{value.title}</li>
                <button className="cross" onClick={() => deleteItem(value.id)}>
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
