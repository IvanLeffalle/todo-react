import { Todo } from "../types/Todos";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium text-gray-400">
        {completedTodos.length} of {todos.length} completed
      </p>
      {completedTodos.length > 0 && (
        <button
          className="text-sm font-medium text-red-500 hover:underline"
          onClick={deleteAllCompleted}
        >
          Delete all completed
        </button>
      )}{" "}
    </div>
  );
}
