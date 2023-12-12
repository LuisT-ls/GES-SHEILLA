// Função para buscar conteúdo
function searchContent() {
  // Obtenha a palavra-chave da caixa de pesquisa
  var keyword = document.getElementById('searchInput').value.toLowerCase()

  // Percorra os elementos relevantes da página
  document.querySelectorAll('section').forEach(function (section) {
    // Verifique se o conteúdo da seção contém a palavra-chave
    var sectionContent = section.textContent.toLowerCase()

    if (sectionContent.includes(keyword)) {
      // Se encontrou correspondência, destaque a seção ou tome outra ação desejada
      section.style.border = '2px solid #87cf2d'
    } else {
      // Se não encontrou correspondência, redefina o estilo
      section.style.border = 'none'
    }
  })
}

// Inicializa o Lightbox2
document.addEventListener('DOMContentLoaded', function () {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  })
})

// Muda a cor de destaque
let color = '#87cf2d'

document.getElementById('changeColor').addEventListener('click', function () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  color = `rgb(${r}, ${g}, ${b})`

  document.querySelectorAll('section h2').forEach(function (element) {
    element.style.color = color
  })
})

// Adiciona galeria de fotos
let gallery = document.getElementById('galeria')

// Adiciona fotos dinamicamente com JavaScript
for (let i = 1; i <= 6; i++) {
  let img = document.createElement('img')
  img.src = `foto${i}.jpg`
  img.width = '300'
  gallery.appendChild(img)
}

// Função para validar o formulário
function validateForm() {
  // Obtenha os valores dos campos
  var nome = document.getElementById('nome').value.trim()
  var email = document.getElementById('email').value.trim()
  var mensagem = document.getElementById('mensagem').value.trim()

  // Validação simples
  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos do formulário.')
    return false // Impede o envio do formulário se algum campo estiver vazio
  }

  // Validação do formato de e-mail (pode ser aprimorada)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um endereço de e-mail válido.')
    return false // Impede o envio do formulário se o formato do e-mail for inválido
  }

  // Se a validação passou, o formulário pode ser enviado
  return true
}

// Suavização do scroll ao clicar nos links da navegação
document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault() // Impede o comportamento padrão do link

    var targetSectionId = link.getAttribute('href').substring(1)
    var targetSection = document.getElementById(targetSectionId)

    if (targetSection) {
      var offsetTop =
        targetSection.offsetTop - document.querySelector('header').offsetHeight
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Adiciona a suavização ao scroll
      })
    }
  })
})

// Adicione isso ao seu arquivo script.js
document
  .getElementById('showFormButton')
  .addEventListener('click', function () {
    var form = document.querySelector('form')
    form.classList.toggle('show')
  })
