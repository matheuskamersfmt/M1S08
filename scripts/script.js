function alterar() {
    let title = document.getElementsByClassName('title')
    let subtitles = document.getElementsByClassName('subtitle')
    
    title[0].innerHTML = "Exercício 2: Selecionar elemento por classe"

    for (let i = 0; i < subtitles.length; i++) {
        subtitles[i].innerHTML = "Novo texto para o elemento " + (i + 1);
    }

}