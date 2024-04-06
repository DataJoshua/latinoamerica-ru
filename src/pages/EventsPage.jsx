import React, { useEffect, useState } from 'react';
import useFirebase from "../hooks/firebase/useFirebase";
import ArticlesList from "../components/articles/ArticlesList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Spinner from "../atoms/Spinner";

const EventsPage = () => {
  const [articles, setArticles] = useState()
  const app = useFirebase()

  const toArray = (data) => {
      const res = []
      data.forEach(val => {
          const id = val.id
          const obj = val.data()
          obj["id"] = id

          res.push(obj)
      })

      return res;
  }

  useEffect(()=> {
      (async () => {
          const data = await getDocs(collection(getFirestore(app), "events"))

          setArticles(toArray(data))
      })()
  }, [app])

  return (
    <>
      <h1 className="text-center text-xl pt-5 font-bold"> Todos los eventos </h1>
      {articles ? <ArticlesList articles={articles}/> : <Spinner/>}
    </>
  )
}

export default EventsPage;
