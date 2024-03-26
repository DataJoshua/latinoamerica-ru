import SliderWrapper from "../components/splide/SliderWrapper";
import '@splidejs/react-splide/css/skyblue';
import image1 from '../assets/images/foto1.png';
import ArticlesList from "../components/articles/ArticlesList";

const MainPage = () => {
    const articles = [{
        imgSrc: image1,
        title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
        author: 'Autor 1',
        tag: 'Etiqueta 1',
        description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
            '\n' +
            'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n',
        fullStoryLink: 'ruta/a/la/historia/completa1.html'
    }]
    return(
        <>
            <SliderWrapper/>
            <br/>
            <ArticlesList articles={articles}/>
        </>
    )
}

export default MainPage;
