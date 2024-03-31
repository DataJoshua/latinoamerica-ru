import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFirebase from "../hooks/firebase/useFirebase";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import Event from "../components/events/Event";

const EventShowPage = () => {
  const { id } = useParams()
  const app = useFirebase()
  const [event, setEvent] = useState()

  const fetchSingleEvent = async () => {
    const data = await getDoc(doc(getFirestore(app), "events", id))

    setEvent(data.data());
  }

  useEffect(()=> {
    fetchSingleEvent()
  }, [app, id])

  return (
    <>
      {event ? <Event event={event}/> : <h1>Loading...</h1>}
    </>
  )
}

export default EventShowPage;
