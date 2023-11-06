import TodoItem from "./TodoItem"
import classes from "./Todos.module.css"
import { useTodos } from "../store/todos-context"

const Todos = () => {
  const { todos } = useTodos()
  return (
    <ul className={classes.todos}>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  )
}

export default Todos
