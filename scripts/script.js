function alterar() {
    let container = document.getElementById('container')

    let text = document.createElement('p')
    text.innerHTML = "Elemento criado e adicionado"

    container.appendChild(text)

}