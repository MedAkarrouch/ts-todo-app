import { createContext, ReactNode, useContext, useState } from "react"
import { Todo } from "../models/Todo"

// Define the context type
type TodosContextType = {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

const initTodosContext = {
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {}
}

// Create the context
const TodosContext = createContext<TodosContextType>(initTodosContext)

const TodosContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos((currTodos) => [...currTodos, new Todo(text)])
  }
  const removeTodo = (id: string) => {
    setTodos((currTodos) => currTodos.filter((todo) => todo.id !== id))
  }
  return (
    <TodosContext.Provider value={{ addTodo, removeTodo, todos }}>
      {children}
    </TodosContext.Provider>
  )
}
const useTodosContext = () => {
  const context = useContext(TodosContext)
  if (!context)
    throw new Error("Context should only be used inside the provider")
  return context
}

export { TodosContextProvider as TodosProvider, useTodosContext as useTodos }
