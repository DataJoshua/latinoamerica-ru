import React from "react";
import Article from "./Article";
import img1 from "../../assets/images/sample.jpg";

const SmallArticles = () => {
    const articles = [{
        imgSrc: img1,
        title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
        author: 'Autor 1',
        tag: 'Etiqueta 1',
        description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
            '\n' +
            'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

    },
        {
            imgSrc: img1,
            title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
            author: 'Autor 2',
            tag: 'Etiqueta 2',
            description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
                '\n' +
                'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

        },
        {
            imgSrc: img1,
            title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
            author: 'Autor 3',
            tag: 'Etiqueta 3',
            description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
                '\n' +
                'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

        },
        {
            imgSrc: img1,
            title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
            author: 'Autor 4',
            tag: 'Etiqueta 4',
            description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
                '\n' +
                'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

        },
        {
            imgSrc: img1,
            title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
            author: 'Autor 5',
            tag: 'Etiqueta 5',
            description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
                '\n' +
                'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

        },
        {
            imgSrc: img1,
            title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
            author: 'Autor 6',
            tag: 'Etiqueta 6',
            description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
                '\n' +
                'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

        },
        {
            imgSrc: img1,
            title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
            author: 'Autor 7',
            tag: 'Etiqueta 7',
            description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
                '\n' +
                'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n'

        }
    ];

    const smallArticles = articles.slice(0, articles.length - 1);

    return (
        <ul className="articles-grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {smallArticles.map((article, index) => (
                <li className="small-article" key={index}>
                    <Article {...article} isSmallComponent />
                </li>
            ))}
        </ul>
    );
}
export default SmallArticles;
