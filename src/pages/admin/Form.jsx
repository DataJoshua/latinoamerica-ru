import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import useFirebase from "../../hooks/firebase/useFirebase";
import { useState } from "react";
import Toast from "./Toast";
import "../../styles/Form.css";

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
      <div className="form-wrapper bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
        {error && <Toast msg={error} setError={setError}/>}
        <form className="max-w-sm mx-auto bg-white p-4 rounded-lg" onSubmit={handleOnSubmit}>
          <div className="mb-5">
            <label className="input-label">Email: </label>
            <input type="email" id="email" className="input-field" placeholder="sample@latinos.com" required />
          </div>
          <div className="mb-5">
            <label className="input-label">Password: </label>
            <input type="password" placeholder="*****" id="password" className="input-field" required />
          </div>
          <button type="submit" className="button">Sign in</button>
        </form>
      </div>
    </>
   )
}

export default Form;
