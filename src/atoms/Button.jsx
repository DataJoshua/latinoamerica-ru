import "../styles/button.css"
const Button = ({label, handleOnClick = ()=> {}, type = "button"}) => {
  return <button
    type={type}
    className="button hover:bg-transparent border border-slate-200 hover:text-slate-900 hover:border hover:border-slate-800 transition"
    onClick={handleOnClick}
  >
    {label}
  </button>
}

export default Button;
