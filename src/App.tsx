import NewTodo from "./components/NewTodo"
import Todos from "./components/Todos"
import { TodosProvider, useTodos } from "./store/todos-context"

function App() {
  return (
    <TodosProvider>
      <div>
        <NewTodo />
        <Todos />
      </div>
    </TodosProvider>
  )
}

export default App
