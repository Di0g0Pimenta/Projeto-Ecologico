// Aguarda 3 segundos (3000 milissegundos) antes de redirecionar
setTimeout(function() {
    // Remove o splash screen
    var splash = document.querySelector('.splash');
    splash.parentNode.removeChild(splash);

    // Verifica se está na página de login
    if (window.location.pathname.includes('InicioScrean.html')) {
        // Evento de clique no botão de login
        document.getElementById('loginButton').addEventListener('click', function() {
            // Redireciona para a página principal após o login
            window.location.href = "LoginScream.html";
        });
        document.getElementById('registerButton').addEventListener('click', function() {
            // Redireciona para a página principal após o login
            window.location.href = "RegisterScrean.html";
        });
    }
}, 3000);
