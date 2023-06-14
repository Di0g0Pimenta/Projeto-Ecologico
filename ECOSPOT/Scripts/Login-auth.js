import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFdRa_1iacox8a5kHdaGk3_Qvey-19mVA",
  authDomain: "ecospot-c4683.firebaseapp.com",
  projectId: "ecospot-c4683",
  storageBucket: "ecospot-c4683.appspot.com",
  messagingSenderId: "167028948379",
  appId: "1:167028948379:web:f12147d5f244a7ccb5b53e"
};

const app = initializeApp(firebaseConfig);

// Obter instâncias do Firestore e do Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Referências aos elementos do formulário
const nameInput = document.querySelector('.From-Input[placeholder="Name"]');
const emailInput = document.querySelector('.From-Input[placeholder="Email"]');
//const emailInput = document.querySelector('#Teste');

const passwordInput = document.querySelector('.From-Input[placeholder="Password"]');
const errorMessage = document.querySelector('.Error-Message');

// Função para fazer o login do usuário
async function loginUser() {
  //console.log(emailInput)
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    // Verificar se o documento do usuário existe
    if (querySnapshot.size > 0) {
      const userDoc = querySnapshot.docs[0]; // Obtém o primeiro documento retornado
      const userData = userDoc.data();

      // Verificar o tipo do usuário
      if (userData.type === 'user') {
        window.location.href = 'http://127.0.0.1:5500/Pages/Home-User.html';
      } else if (userData.type === 'admin') {
        window.location.href = 'http://127.0.0.1:5500/Pages/Home-Admin-Map.html';
      }
    } else {
      // Usuário não encontrado
      errorMessage.textContent = 'Usuário não encontrado.';
    }

    // Limpar os campos do formulário
    emailInput.value = '';
    passwordInput.value = '';

  } catch (error) {
    console.log(error);
    errorMessage.textContent = 'Ocorreu algum erro. Por favor tente outra vez.';
  }
}


// Associar a função ao evento de clique do botão de login
const loginButton = document.querySelector('.Button-Login-Screan');
loginButton.addEventListener('click', loginUser);