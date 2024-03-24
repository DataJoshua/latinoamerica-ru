import "../styles/button.css"
const Button = ({label, handleOnClick}) => {
  return <button
      className={"button"}
      onClick={handleOnClick}
  >
    LUCTUS SUSCRIPT IN
  </button>
  //aqui le puedes remplazar por el label, pero le puse esa frase para q se vea el css mi amor
}

export default Button;
