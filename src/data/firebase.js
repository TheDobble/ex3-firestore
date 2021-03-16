import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2Bc1D60tFsIfKtxyrCeZ7n3hNG7Gc2Uc",
  authDomain: "panier-achat.firebaseapp.com",
  databaseURL: "https://panier-achat-default-rtdb.firebaseio.com",
  projectId: "panier-achat",
  storageBucket: "panier-achat.appspot.com",
  messagingSenderId: "522134652630",
  appId: "1:522134652630:web:c64982ee579bd85f912b77",
  measurementId: "G-7ZBKRL9T3J"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;