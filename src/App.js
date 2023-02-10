import './App.css';
import React, {useState} from 'react';

import Form from "./components/form";
import TodoList from './components/Todolist';

function App() {
  const[inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);  
  return (
    <React.Fragment>
      <div className="App">
     <header>
      <h1>TO DO LIST</h1>
     </header>
      <Form inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}/>
      <TodoList />
      
    </div>
    </React.Fragment>
  );
}

export default App;
