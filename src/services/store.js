import { firebaseApp } from './firebase';

const db = firebaseApp.firestore();

export function getMemes() {
    return db.collection('memes').get();
}

export function createMeme(meme) {
    return db.collection('memes').add(meme);
}
