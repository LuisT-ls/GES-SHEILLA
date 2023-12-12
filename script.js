// Função para abrir o menu
function abrirMenu() {
  document.querySelector('.nav').style.display = 'block'
}

// Função para fechar o menu
function fecharMenu() {
  document.querySelector('.nav').style.display = 'none'
}

// Função para chamar a chamada para ação
function chamarChamadaParaAcao() {
  alert('Chamou a chamada para ação!')
}

// Função para visualizar mais informações sobre a pintura mediúnica
function visualizarMaisInformacoes() {
  // Obtém o elemento da galeria
  const galeria = document.querySelector('.galeria')

  // Verifica se a galeria está aberta
  if (galeria.style.display === 'none') {
    // Abre a galeria
    galeria.style.display = 'flex'
  } else {
    // Fecha a galeria
    galeria.style.display = 'none'
  }
}

// Eventos
document.querySelector('.hamburger').addEventListener('click', abrirMenu)
document.querySelector('.nav .fechar').addEventListener('click', fecharMenu)
document
  .querySelector('.chamada-para-acao a')
  .addEventListener('click', chamarChamadaParaAcao)
document
  .querySelector('.galeria')
  .addEventListener('click', visualizarMaisInformacoes)
