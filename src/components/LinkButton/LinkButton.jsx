import { Link } from "react-router-dom"

function Button({ path, text }) {
  return (
      <Link to={path}>
        <button>{ text }</button>
      </Link>
    )
}

export default Button