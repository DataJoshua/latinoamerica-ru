import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const useGoogleFirebase = () => {
  const [db, setDb] = useState(null)

  useEffect(()=> {
    const app = initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGER_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID
    })

    setDb(getFirestore(app))
  }, [])

  return db
}

export default useGoogleFirebase;
