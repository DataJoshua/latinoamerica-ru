import React, { useEffect, useState } from 'react';
import Article from './Article';
import useFirebase from '../../hooks/firebase/useFirebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ArticlesList = () => {
    const [articles, setArticles] = useState()
    const app = useFirebase()

    const toArray = (data) => {
        const res = []
        
        data.forEach(val => res.push(val.data()))
        
        return res;
    }
    
    useEffect(()=> {
        (async () => {
            const data = await getDocs(collection(getFirestore(app), "events"))

            setArticles(toArray(data))
        })()
    }, [])

    return (
        <ul className="articles-grid">
            {articles?.map((article, index) => (
                <li className={index > 0 ? "secondary-article" : ""} key={index}>
                    <Article {...article} />
                </li>
            ))}
        </ul>
    );
};

export default ArticlesList;
