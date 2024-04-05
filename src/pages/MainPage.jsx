import SliderWrapper from "../components/splide/SliderWrapper";
import '@splidejs/react-splide/css/skyblue';
import MainArticle from "../components/articles/MainArticle";
import Button from "../atoms/Button";
import {useNavigate} from "react-router";

const MainPage = () => {
    const navigate = useNavigate()
    return(
        <>
            <SliderWrapper/>
            <br/>
            <MainArticle/>
            <br/>
            <div className="flex justify-center items-center mb-5">
                <Button label = "Ver mas eventos"
                        handleOnClick={()=> navigate ("/eventos")}
                        />
            </div>
        </>
    )
}

export default MainPage;
