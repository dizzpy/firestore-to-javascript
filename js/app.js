import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { db } from '../firebase/firebase-init.js';

// form submission
document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // get data from html file
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;

    console.log({ firstname, lastname, email });

    // data list
    const userData = { firstname, lastname, email };

    try {
        // save document in fs
        const docRef = await addDoc(collection(db, "users"), userData);
        console.log("Document written with ID: ", docRef.id);
        alert('Data saved successfully!');

        // reset
        document.getElementById('userForm').reset();
    } catch (e) {
        console.error("Error adding document: ", e);
        alert('Error saving data.');
    }
});
