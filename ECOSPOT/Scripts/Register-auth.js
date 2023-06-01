import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyBFdRa_1iacox8a5kHdaGk3_Qvey-19mVA",
    authDomain: "ecospot-c4683.firebaseapp.com",
    projectId: "ecospot-c4683",
    storageBucket: "ecospot-c4683.appspot.com",
    messagingSenderId: "167028948379",
    appId: "1:167028948379:web:f12147d5f244a7ccb5b53e"
  };

  const app = initializeApp(firebaseConfig);
  
  // Obtenha as referências dos elementos HTML
  const nameInput = document.querySelector('input[placeholder="Name"]');
  const emailInput = document.querySelector('input[placeholder="Email"]');
  const passwordInput = document.querySelector('input[placeholder="Password"]');
  const registerButton = document.querySelector('.Button-Login-Screan');
  
  // Adicione um evento de clique ao botão de registro
  registerButton.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Crie um novo usuário no Firebase Auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        // Salve os dados adicionais no Firebase Database
        firebase.database().ref('users/' + user.uid).set({
          name: name,
          email: email,
          // outros dados que você desejar salvar
        });
  
        // Redirecione ou execute outras ações após o registro bem-sucedido
        console.log('Usuário registrado com sucesso!');
      })
      .catch((error) => {
        // Lida com erros durante o processo de registro
        console.error(error);
      });
  });