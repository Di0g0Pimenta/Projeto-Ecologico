import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBFdRa_1iacox8a5kHdaGk3_Qvey-19mVA",
    authDomain: "ecospot-c4683.firebaseapp.com",
    projectId: "ecospot-c4683",
    storageBucket: "ecospot-c4683.appspot.com",
    messagingSenderId: "167028948379",
    appId: "1:167028948379:web:f12147d5f244a7ccb5b53e"
  };

// Inicializa o app do Firebase
const app = initializeApp(firebaseConfig);

// Referência para a coleção "CollectPoint"
const db = getFirestore(app);
const collectPointRef = collection(db, "CollectPoint");

// Função para adicionar o ponto de coleta no Firebase
export function CollectPoint() {
  // Obtém os valores dos campos
  var location = document.getElementById("location").value;
  var type = document.getElementById("type").value;
  var imageFile = document.getElementById("image").files[0];

  // Cria uma referência para o armazenamento no Firebase
  var storage = getStorage(app);
  var storageRef = ref(storage, 'images/' + imageFile.name);

  // Faz o upload da imagem para o armazenamento do Firebase
  uploadBytes(storageRef, imageFile).then((snapshot) => {
    // Obter a URL da imagem enviada
    return getDownloadURL(snapshot.ref);
  }).then((downloadURL) => {
    // Cria um objeto com os dados a serem enviados para o Firebase
    var data = {
      location: location,
      type: type,
      imageURL: downloadURL
    };

    // Salva os dados no banco de dados do Firebase
    addDoc(collectPointRef, data).then(() => {
      // Dados enviados com sucesso
      alert("Dados enviados com sucesso para o Firebase!");

      // Limpa os campos após o envio
      document.getElementById("location").value = "";
      document.getElementById("type").value = "";
      document.getElementById("image").value = "";
    }).catch((error) => {
      // Ocorreu um erro ao enviar os dados
      console.error("Erro ao enviar os dados para o Firebase:", error);
    });
  }).catch((error) => {
    // Ocorreu um erro ao fazer o upload da imagem
    console.error("Erro ao fazer o upload da imagem:", error);
  });
}

// Função para fechar o overlay
export function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}