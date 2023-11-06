import { FormEvent, useRef } from "react"
import classes from "./NewTodo.module.css"
import { useTodos } from "../store/todos-context"

const NewTodo = () => {
  const { addTodo } = useTodos()
  const todoTextInputRef = useRef<HTMLInputElement>(null!)
  console.log(" ", todoTextInputRef.current)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current.value
    if (!enteredText.trim().length) return
    addTodo(enteredText)
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  )
}

export default NewTodo
