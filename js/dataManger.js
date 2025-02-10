import { useState } from "react";
import { auth, db } from "../js/firebaseConfig";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const addHabitViewModel = (navigation) => {
  const [selectedIcon, setSelectedIcon] = useState("sport_blue");
  const [title, setTitle] = useState("");
  const userId = auth.currentUser?.uid;

  const addHabit = async () => {
    const Ref = doc(db, "users", userId, "habits", title);

    try {
      await setDoc(Ref, {
        title,
        selectedIcon,
        createdAt: serverTimestamp(),
      });

      navigation.navigate("Home");
    } catch (error) {
      console.log("Saving Data Failed", error.message);
    }
  };

  return {
    selectedIcon,
    setSelectedIcon,
    title,
    setTitle,
    addHabit,
  };
};
export { addHabitViewModel };
