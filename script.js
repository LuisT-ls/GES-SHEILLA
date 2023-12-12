// Seleciona o elemento nav fora da função para reutilização
const navElement = document.querySelector('nav')

// Toggle menu quando clicar no ícone de menu mobile
document.querySelector('.botao-menu').addEventListener('click', function () {
  navElement.classList.toggle('ativo')
})

// Função para alternar o menu
function toggleMenu() {
  navElement.classList.toggle('ativo')
}
