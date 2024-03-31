function alterar() {
    let element = document.querySelector('.op2')
    element.setAttribute('selected', 'selected')

}

function remover() {
    let elem = document.querySelector('.op2')
    let select = document.querySelector('.select')
    elem.removeAttribute('selected', 'selected')
}