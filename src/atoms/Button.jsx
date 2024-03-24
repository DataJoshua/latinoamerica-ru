import "../styles/button.css"
const Button = ({label, handleOnClick = ()=> {}}) => {
  return <button
  // aqui use tailwindcss porque pues es mas rapido que escribir css puro
    className="button hover:bg-transparent border border-slate-200 hover:text-slate-900 hover:border hover:border-slate-800 transition"
    onClick={handleOnClick}
  >
    {label}
  </button>
}

export default Button;
