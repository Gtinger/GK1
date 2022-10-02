import './App.css';
import React from 'react';
import Title from './components/Title';
import AddToDo from './components/AddTodo';
import Todo from './components/toDo';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore"
import { db } from './firebase';
import { Tab } from '@mui/material';



function App(){
  const [todos, setTodos] = React.useState([])

  //henter data med useEffect hook

  React.useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (QuerySnapshot) => {//firebase collection navn
      let todosArray = [];
      QuerySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(),id: doc.id})
      } );
      setTodos(todosArray) //genindlæser UI
    } );
    return () => unsub(); 
  },[])
  
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), {title:title})
  }
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id),{
      completed: !todo.completed
    })
  }
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id))
  }


  return(
    <div className='App'>
      <div>
        <Title/>
      </div>
      <div>
        <AddToDo/>
      </div>
      <div className='todo_container'>
        {todos.map((todo)=> (
          <Todo 
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          />
        ))}
      </div>
          <navigationContainer>
            <Tab.Navigator>
              
            </Tab.Navigator>
          </navigationContainer>



    </div>



  )
}








export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save t reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/