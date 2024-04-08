import { getAuth, onAuthStateChanged } from "firebase/auth";
import useFirebase from "../../hooks/firebase/useFirebase";
import Form from "./Form";
import { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel";
import Spinner from "../../atoms/Spinner";

const AdminPage = () => {
  const app = useFirebase();
  const auth = getAuth(app);
  const [isLoading, setIsloading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(()=> {
    setTimeout(()=> setIsloading(false), 1500);
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return ()=> {
      unsubscribe()
    }
  }, [auth]);

  if (user) {
    return <AdminPanel/>
  } else {
    return <>{isLoading ? <Spinner/> : <Form setUser={setUser}/>}</>
  }
}

export default AdminPage;
