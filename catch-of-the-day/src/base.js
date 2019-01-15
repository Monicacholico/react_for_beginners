import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBJ-dD-UO2ZkIFJOHMWW_0_B5F99nBO4Q4",
        authDomain: "catch-of-the-day-1e29f.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-1e29f.firebaseio.com"
    }
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;