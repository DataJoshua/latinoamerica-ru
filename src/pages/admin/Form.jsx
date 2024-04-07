import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import useFirebase from "../../hooks/firebase/useFirebase";
import { useState } from "react";
import Toast from "./Toast";

const Form = ({ setUser }) => {
  const app = useFirebase();
  const auth = getAuth(app);
  const [error, setError] = useState(null)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const pwd = e.target[1].value

    setPersistence(auth, browserSessionPersistence).then(()=> {
      return signInWithEmailAndPassword(auth, email, pwd).then((val)=> {
        setUser(val.user)
      });
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }

  return ( 
    <>
      <div className="relative py-[200px] px-5 bg-blue-300">
        {error && <Toast msg={error}/>}
        <form className="max-w-sm mx-auto" onSubmit={handleOnSubmit}>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email: </label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password: </label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
        </form>
      </div>
    </>
   )
}

export default Form;
