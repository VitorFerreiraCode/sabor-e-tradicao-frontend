document.getElementById('entrar').onclick = function () {
    event.preventDefault();
    const { user, password } = pegarDados()
    verificarLogin(user, password)
}

function pegarDados() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    return {user, password};
}

function logadoComSucesso() {
    alert('Você foi logado com sucesso.');
    window.location.href = '../index.html'
}

function verificarLogin(user, password) {
    if (user == 'admin' && password == 'admin') {
        logadoComSucesso();
    } else {
        alert('Falha ao se logar. Tente novamente.')
    }
}