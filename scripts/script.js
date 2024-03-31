function alterar() {
    let elements = document.getElementsByClassName('element');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
        elements[i].style.backgroundColor = "red";
    }
}