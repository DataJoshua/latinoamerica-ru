import { getAuth, onAuthStateChanged } from "firebase/auth";
import useFirebase from "../../hooks/firebase/useFirebase";
import Form from "./Form";
import { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel";

const AdminPage = () => {
  const app = useFirebase();
  const auth = getAuth(app);
  const [user, setUser] = useState()

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
    return <Form setUser={setUser}/>
  }
}

export default AdminPage;
