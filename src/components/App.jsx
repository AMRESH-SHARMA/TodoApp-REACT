import React, { useState } from "react";
import Form from "./Form.jsx";
import ToDoItem from "./ToDoItem.jsx";


function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    
  }

  function deleteItem(id) {
    console.log(id)
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
            return index !== id
        }
      )
    });
    setInputText=("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <Form 
        addItem = {addItem}
      />
      
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem 
            key={index}
            id={index}
            text = {todoItem} 
            onChecked = {deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
