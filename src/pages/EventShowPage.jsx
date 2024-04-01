import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFirebase from "../hooks/firebase/useFirebase";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import EventWrapper from "../components/events/EventWrapper.jsx"

const EventShowPage = () => {
  const { id } = useParams()
  const app = useFirebase()
  const [event, setEvent] = useState()

  useEffect(()=> {
    (async () => {
      const data = await getDoc(doc(getFirestore(app), "events", id))
  
      setEvent(data.data());
    })()
  }, [app, id])

  return (
    <>
      {event ? <EventWrapper event={event}/> : <h1>Loading...</h1>}
    </>
  )
}

export default EventShowPage;
