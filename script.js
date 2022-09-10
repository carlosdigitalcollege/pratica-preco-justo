let main = () => {
    const precoJustoElement = document.querySelector('#graham .price .value')
    const cells = document.querySelectorAll('#indicators .cell')
    let vpa
    let lpa

    cells.forEach((cell) => {
        if (cell.innerText.includes('LPA')) {
            lpa = cell.querySelector('.value').innerText.replace(',', '.')
        }
        
        if (cell.innerText.includes('VPA')) {
            vpa = cell.querySelector('.value').innerText.replace(',', '.')
        }
    })


    const precoJusto = Math.sqrt(22.5 * vpa * lpa)

    precoJustoElement.innerHTML = precoJusto.toFixed(2).replace('.', ',')
    precoJustoElement.style.color = 'black'
    precoJustoElement.style.textShadow = 'none'
    document.querySelector('#modal-sign-access').classList.remove('show')
}

const unlockButton = document.querySelector('a.btn-default.subscribe.inline.gg.action-login')
unlockButton.addEventListener('click', main)
