import { setDoc, doc, addDoc, getDoc } from "firebase/firestore";
import { collectionRef, firestore } from "../../firebase.config";

export const useAddDoc = async (values) => {
  const { task, date } = values;
  await addDoc(collectionRef, {
    task: task,
    date: date,
  });
};

export const useSetDoc = () => {
  return null;
};

export const useGetDoc = async (id) => {
  try {
    const ref = doc(firestore, "tasks", id);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      return snapshot.data();
    }
  } catch (error) {
    console.log(error);
  }
};
