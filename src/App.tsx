import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";
function App() {
  const { todo, setTodoCompleted, addTodo, deleteTodo, deleteAllCompleted } =
    useTodos();
  return (
    <>
      <div className="py-10 h-screen space-y-5 overflow-y-auto bg-dark">
        <h1 className="text-2xl font-bold text-center text-mint">To-Do List</h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6 bg-light">
          <AddTodoForm onSubmit={addTodo} />
          <TodoList
            todos={todo}
            onCompleteChange={setTodoCompleted}
            onDelete={deleteTodo}
          />
        </div>
        <TodoSummary todos={todo} deleteAllCompleted={deleteAllCompleted} />
      </div>
    </>
  );
}

export default App;
