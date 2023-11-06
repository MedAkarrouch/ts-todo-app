import { Todo } from "../models/Todo"
import { useTodos } from "../store/todos-context"
import classes from "./TodoItem.module.css"
type PropsType = {
  todo: Todo
}
const TodoItem = ({ todo }: PropsType) => {
  const { removeTodo } = useTodos()
  return (
    <li onClick={() => removeTodo(todo.id)} className={classes.item}>
      {todo.text}
    </li>
  )
}

export default TodoItem
