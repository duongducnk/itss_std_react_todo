import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA_AfmnM0oPyZuZyjERd1fIupFmf1x9c2M",
  authDomain: "fir-sample-a6166.firebaseapp.com",
  projectId: "fir-sample-a6166",
  storageBucket: "fir-sample-a6166.appspot.com",
  messagingSenderId: "1059058177199",
  appId: "1:1059058177199:web:59a6c7610983c7b881705a",
  measurementId: "G-SK1X5VHMCG"
};

firebase.initializeApp(firebaseConfig);

// reference to todos collection
const collection = firebase.firestore().collection("todos");

// get items
export const getFbItems = async () => {
    const data = await collection.get();
    const items = data.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
}

//add item
export const addFbItem = async (item) => {
    await collection.add(item);
}

//update item
export const updateFbItem = async (item, id) => {
    await collection.doc(id).update(item);
}

//delete item
export const deleteFbItem = async (item) => {
  const todoRef = collection.doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 