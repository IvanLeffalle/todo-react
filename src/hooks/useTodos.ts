import { useEffect, useState } from "react";
import { Todo } from "../types/Todos";
import { todos } from "../data/Todos";

export default function useTodos() {
  const [todo, setTodo] = useState(() => {
    const savedTodo: Todo[] = JSON.parse(localStorage.getItem("todo") || "[]");
    return savedTodo.length > 0 ? savedTodo : todos;
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodo((prevTodos) =>
      prevTodos.map((tod) => (tod.id === id ? { ...tod, completed } : tod))
    );
  }
  function addTodo(title: string) {
    setTodo((prevTodos) => [
      { id: Date.now(), title, completed: false },
      ...prevTodos,
    ]);
  }
  function deleteTodo(id: number) {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodo((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }
  return {
    todo,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted,
  };
}
