import { firebaseApp } from './firebase';

const db = firebaseApp.firestore();

export function getMemeCollection() {
    return db.collection('memes');
}
