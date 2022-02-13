const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../../challenge-yourself-b8879-firebase-adminsdk-v6671-f82ac54705.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();


app.get("/", async function(req, res) {
    const docRef = db.collection('users').doc('alovelace');

        await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
        });

   

})