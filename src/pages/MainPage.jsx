import SliderWrapper from "../components/splide/SliderWrapper";
import '@splidejs/react-splide/css/skyblue';
import ArticlesList from "../components/articles/ArticlesList";

const MainPage = () => {
    return(
        <>
            <SliderWrapper/>
            <br/>
            <ArticlesList/>
        </>
    )
}

export default MainPage;
