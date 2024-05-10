import useFirebase from "../../hooks/firebase/useFirebase";
import { setDoc, doc, getFirestore } from "firebase/firestore"
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage"
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const NewEventForm = () => {
  const app = useFirebase()
  const navigate = useNavigate()

  const handleOnSumit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value;
    const description = e.target[1].value;
    const author = e.target[2].value;
    const tag = e.target[3].value;
    const img = e.target[4].files[0];
    const eventId = nanoid();

    const imgRef = ref(getStorage(app), `/events/${eventId}/main`)

    uploadBytes(imgRef, img).then( () => {
      getDownloadURL(imgRef).then(async (url) => {
        const eventData = {
          title,
          description,
          author,
          tag,
          imgSrc: url
        }

        await setDoc(doc(getFirestore(app), "events", eventId), eventData)

        navigate(`/eventos/${eventId}`)
      })
    })
  }

  return ( 
    <>
      <form className="max-w-2xl px-5 py-7 md:px-2 m-auto" onSubmit={handleOnSumit}>
        <h1 className="text-2xl text-center">Crear un nuevo Evento</h1>
        <div className="relative z-0 w-full mb-5 group">
            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="text-md text-slate-500"> Description: </label>
          <textarea className="p-5 block w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tag</label>
          </div>
        </div>

        <div className="my-8">
          <label className="block mb-2 text-sm font-medium text-slate-500 dark:text-white" for="user_avatar">Upload Image</label>
          <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept="image/*" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Event</button>
      </form>
    </> 
  )  
}

export default NewEventForm;
