import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

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
const passwordInput = document.querySelector('.From-Input[placeholder="Password"]');
const errorMessage = document.querySelector('.Error-Message');

// Função para fazer o login do usuário
async function loginUser() {
    const email = emailInput.value;
    const password = passwordInput.value;
  
    try {
      // Fazer o login do usuário no Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
  
      // Limpar os campos do formulário
      emailInput.value = '';
      passwordInput.value = '';
  
      // Redirecionar para a página de sucesso
      window.location.href = 'http://127.0.0.1:5500/Pages/Home-User.html';
    } catch (error) {
      console.log(error);
      errorMessage.textContent = 'Ocorreu algum erro. Por favor tente outra vez.';
    }
  }
  
  // Associar a função ao evento de clique do botão de login
  const loginButton = document.querySelector('.Button-Login-Screan');
  loginButton.addEventListener('click', loginUser);