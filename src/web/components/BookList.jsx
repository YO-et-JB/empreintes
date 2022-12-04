import { Formik } from "formik"
import { useReducer, useRef } from "react"

// cf. https://daveceddia.com/usereducer-hook-examples/

const BookList = () => {
  const inputRef = useRef()

  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
      // ... same as before ...

      case "remove":
        // keep every item except the one we want to remove

        return state.filter((_, index) => index != action.index)

      default:
        return state
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "add",
      name: inputRef.current.value,
    })
    inputRef.current.value = ""
  }

  return (
    <Formik>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </Formik>
  )
}

export default BookList
