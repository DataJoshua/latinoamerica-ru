import SliderWrapper from "../components/splide/SliderWrapper";
import '@splidejs/react-splide/css/skyblue';
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import img1 from "../assets/images/sample.jpg"
import Article from "../components/articles/Article";

const MainPage = () => {
    const navigate = useNavigate()
    const articleSample = useMemo(()=> ({
        imgSrc: img1,
        title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
        author: 'Autor 1',
        tag: 'Etiqueta 1',
        description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
            '\n' +
            'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

    }), [])

    return(
        <>
            <SliderWrapper/>
            <br/>
            <div className="flex justify-center">
                <Article {...articleSample} />
            </div>
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
