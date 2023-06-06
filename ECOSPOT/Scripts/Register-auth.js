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

// Função para registrar o usuário
async function registerUser() {
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    // Verificar se o email já existe
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      errorMessage.textContent = 'O email já existe.';
      return;
    }

    // Criar o usuário no Firebase Authentication
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // Armazenar os dados no Firestore
    const userRef = doc(usersRef, user.uid);
    await setDoc(userRef, {
      name: name,
      email: email,
      type: 'user'
    });

    // Limpar os campos do formulário
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    // Redirecionar para a página de sucesso
    window.location.href = 'http://127.0.0.1:5500/Pages/Login.html';


  } catch (error) {
    console.log(error);
    errorMessage.textContent = 'Ocorreu algum erro. Por favor tente outra vez.';
  }
}

// Associar a função ao evento de clique do botão de registro
const registerButton = document.querySelector('.Button-Login-Screan');
registerButton.addEventListener('click', registerUser);