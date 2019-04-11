
import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom'

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string
  complete: boolean
}


export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  const addTodo = (text: string): void => {
    const updatedToDos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(updatedToDos);
  }

  const completeTodo = (index: number): void => {
    const updatedTodos: ITodo[] = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    setTodos(updatedTodos);
  }

  const deleteTodo = (index: number): void => {
    const updatedTodos: ITodo[] = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  console.log(todos);

  return (
    <>
      <h1>ToDo list</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1em" }}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
          <button type="submit">Add To Do</button>
        </div>
      </form>
      {todos.map((todo: ITodo, index: number) => (
        <Fragment key={index}>
          <div style={{ textDecoration: todo.complete ? "line-through" : "" }}>
            {todo.text}
            <button style={{ marginLeft: "10px" }} disabled={todo.complete ? true : false} type="button" onClick={() => completeTodo(index)}>{todo.complete ? "Сделано." : "Не Сделано!"}</button>
            <button style={{ marginLeft: "10px" }} disabled={todo.complete ? false : true} type="button" onClick={() => deleteTodo(index)}>Remove</button>
          </div>
        </Fragment>
      ))}
    </>
  )
}
