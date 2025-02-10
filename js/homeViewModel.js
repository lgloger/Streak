import { useState, useEffect } from "react";
import { auth, db } from "../js/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const homeViewModel = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = auth.currentUser?.uid;

  const fetchHabits = async () => {
    try {
      const q = query(collection(db, "users", userId, "habits"));
      const querySnapshot = await getDocs(q);

      const habitsData = [];
      querySnapshot.forEach((doc) => {
        habitsData.push({ id: doc.id, ...doc.data() });
      });

      setHabits(habitsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching habits:", error);
      setLoading(false);
    }
  };

  const getCurrentWeek = () => {
    const dates = [];
    const today = new Date();

    const monday = new Date(today);
    monday.setDate(
      today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
    );

    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return { habits, loading, fetchHabits, getCurrentWeek };
};

export { homeViewModel };
