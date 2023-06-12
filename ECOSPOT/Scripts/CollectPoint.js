import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

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
async function CollectPoint() {
  // Obtém os valores dos campos de entrada
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;
  const image = document.getElementById("image").value;

  // Cria um objeto com os dados
  const collectPointData = {
    location: location,
    type: type,
    image: image
  };

  try {
    // Adiciona o ponto de coleta à coleção "CollectPoint"
    const docRef = await setDoc(doc(collectPointRef), collectPointData);
    console.log("Ponto de coleta adicionado com ID: ", docRef.id);

    // Limpa os campos de entrada após adicionar os dados
    document.getElementById("location").value = "";
    document.getElementById("type").value = "";
    document.getElementById("image").value = "";
  } catch (error) {
    console.error("Erro ao adicionar ponto de coleta: ", error);
  }
}

// Função para fechar o overlay
function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}