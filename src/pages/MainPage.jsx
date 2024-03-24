import SliderWrapper from "../components/splide/SliderWrapper";
import '@splidejs/react-splide/css/skyblue';
import Button from "../atoms/Button";

const MainPage = () => {
  return(
    <>
      <SliderWrapper/>
      {/* asi seria lo correcto de probar el boton, no queremos tener que cambiar nada dentro del componente,
      ya que este debe ser reutilizable, cambias el codigo afuera pero dentro del componente no */}
      <Button label="LUCTUS SUSCRIPT IN" handleOnClick={() => alert("hello world")}/>
      <Button label="BUTTON 2"/>
    </>
  )
}

export default MainPage;
