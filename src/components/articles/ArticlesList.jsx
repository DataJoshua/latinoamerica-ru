import Article from './Article';

const ArticlesList = ({ articles }) => {
    return (
        <ul className="articles-grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {articles?.map((article, index) => (
                <li className="small-article" key={index}>
                    <Article {...article} isSmallComponent/>
                </li>
            ))}
        </ul>
    );
}

export default ArticlesList;
