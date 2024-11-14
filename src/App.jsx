import { Button, Container, HStack, Input } from "@chakra-ui/react";
import { TodoTable } from "./components/TodoTable";
import { useState, useEffect } from "react";
import {makeId } from "./utils";
function App(){
  const [ text, setText ] = useState("");
  const [ todoList, setTodoList ] = useState([])

  useEffect(() => {
    const todo = localStorage.getItem("todoapp");
    if(!todo) return;
    const parsedTodo = JSON.parse(todo);
    if(parsedTodo.length > 0) setTodoList(parsedTodo);
  },[]);

  useEffect(() => {
    const todo =JSON.stringify(todoList);
    localStorage.setItem("todoapp", todo);
  }, [ todoList ]);

  const updateTodo = (id, newTodo) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    if(index < 0) return;
    todoList[index] = newTodo;
    setTodoList([ ... todoList]);
  }

  const addTodo = () =>{
    if(text.length == 0) return;
    const newTodo = {
      title: text,
      id: makeId(5),
      status: "pendding",
    };
    setText("")
    setTodoList((todos) => [newTodo, ...todos]);
  }
  return (
    <Container>
      <HStack my={8}>
        <Input 
        value={text}
        placeholder="タイトル"
        onChange={(e) => setText(e.target.value)}>
        </Input>
        <Button onClick={addTodo}>追加</Button>
      </HStack>
      <TodoTable todoList={todoList} onChange={updateTodo} />
    </Container>
  );
}

export default App;