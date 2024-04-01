import SliderWrapper from "../components/splide/SliderWrapper";
import '@splidejs/react-splide/css/skyblue';
import MainArticle from "../components/articles/MainArticle";
import {Link} from "react-router-dom";
import Button from "../atoms/Button";

const MainPage = () => {
    return(
        <>
            <SliderWrapper/>
            <br/>
            <MainArticle/>
            <br/>
            <div className="flex justify-center items-center">
            <Link to="/eventos">
                <Button label="Ver mas eventos"/>
            </Link>
            </div>
        </>
    )
}

export default MainPage;
