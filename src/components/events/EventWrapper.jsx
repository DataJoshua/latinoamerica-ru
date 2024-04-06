import Event from "./Event.jsx"
import Gallery from "../gallery/Gallery";

const EventWrapper = ({ event }) => {
  return ( 
    <>
      <Event event={event}/>
      <Gallery/>
    </>
  )
}
 
export default EventWrapper;
