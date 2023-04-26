import { setDoc, doc, addDoc, getDoc } from "firebase/firestore/lite";
import { collectionRef, firestore } from "../../firebase.config";

export const useAddDoc = async (values) => {
  const { task, date } = values;
  await addDoc(collectionRef, {
    task: task,
    date: date,
  });
};

export const useSetDoc = async (...document) => {
  const [updatedDoc] = document;
  const { id } = updatedDoc;

  try {
    await setDoc(doc(collectionRef, "tasks", id), {
      task: updatedDoc.task,
      date: updatedDoc.date,
    });

    return "Document has been updated";
  } catch (error) {
    
    return error;
  }
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
