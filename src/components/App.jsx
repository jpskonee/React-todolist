import React from "react";

function App() {
  const [value, setValue] = React.useState("");
  const [listItems, setItems] = React.useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
  }

  function sendItem() {
    setItems((prevValue) => {
      return [...prevValue, value];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <div className="form">
        <input
          name="newItem"
          onChange={handleChange}
          value={value}
          type="text"
        />
        <button onClick={sendItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item) => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
