import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject, list } from 'firebase/storage'
import { v4 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyDVq5dZo0iIzi9HULzDecU7VjnxXneTCtM",
    authDomain: "aloja-storage.firebaseapp.com",
    projectId: "aloja-storage",
    storageBucket: "aloja-storage.appspot.com",
    messagingSenderId: "236779540993",
    appId: "1:236779540993:web:90e0ee4db109e07c12e600"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

/**
 * Upload a file using firebase storage
 * @param {File} file to upload
 * @returns {Promise<string>} url or the uploaded file
 */

export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file).then(res => { console.log(res); })
    const url = await getDownloadURL(storageRef)
    return url
}


export async function deleteFile(urlsToDelete) {

    urlsToDelete.forEach(async (file) => {
        const fileRef = ref(storage, file)
        const fileName = fileRef.name
        try {
            const res = await deleteObject(fileRef)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        console.log(fileRef);



    });

}