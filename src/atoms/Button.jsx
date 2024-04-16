import "../styles/button.css"
const Button = ({label, handleOnClick = ()=> {}, type = "button", removeHover = false, extraClass = ""}) => {
  return <button
    type={type}
    className={`button ${extraClass} ${removeHover ? "" : "hover:bg-transparent hover:text-slate-900 hover:border hover:border-slate-800"} border border-slate-400 transition`}
    onClick={handleOnClick}
  >
    {label}
  </button>
}

export default Button;
