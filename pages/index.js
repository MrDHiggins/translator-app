import Head from "next/head";
import styles from "../styles/Home.module.css";
import { db } from "../firebase";
import { useRef } from "react";
import { collection, addDoc , serverTimestamp  } from "firebase/firestore"; 

export default function Home() {

  const inputRef = useRef(null);

  const onSubmit =  async (e) =>{
    e.preventDefault();
    try{
      const docRef = await addDoc(collection(db, "messages"), {
        message: inputRef.current.value,
        timestamp: serverTimestamp(),
      },[]);
      console.log("Document written with ID: ", docRef.id);
    }catch(err){
      console.log(err);;
    }

    inputRef.current.value = ""
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Translator app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Translator App</h1>

      <form>
        <input type="text" ref={inputRef}/>
        <button type="submit" onClick={onSubmit}>Submit Message</button>
      </form>
    </div>
  );
}
