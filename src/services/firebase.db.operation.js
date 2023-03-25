import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase.config";

const collectionRef = collection(firestore, "tasks");

export const Subscribe = onSnapshot(collectionRef, {
  next: (snapshot) => {
    const todoList = [];

    snapshot.docs.forEach((doc) => {
      todoList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return todoList
  },
});

