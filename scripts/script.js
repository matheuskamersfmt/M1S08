function alterar() {
    let elements = document.getElementsByClassName('element')

    for(let i=0; i < elements.length; i++) {
        elements[i].classList.add('classe-alterada')
    }

}