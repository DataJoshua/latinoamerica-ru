import "../styles/button.css"
const Button = ({label}) => {
  return <button
      className={button}
      onClick={handleOnClick}
  >
    {label}
  </button>
}

export default Button;
