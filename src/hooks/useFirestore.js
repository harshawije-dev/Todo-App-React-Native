import { setDoc, doc, addDoc } from "firebase/firestore";
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
