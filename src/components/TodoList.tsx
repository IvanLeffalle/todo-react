import { Todo } from "../types/Todos";
import TodoItem from "./TodoItem";

interface TodoItemProps {
  todos: Todo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompleteChange,
  onDelete,
}: TodoItemProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });
  return (
    <>
      {" "}
      <div className="space-y-2">
        {todosSorted.map((todos) => (
          <TodoItem
            key={todos.id}
            todo={todos}
            onCompleteChange={onCompleteChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-gray-400">No pending tasks</p>
      )}
    </>
  );
}
