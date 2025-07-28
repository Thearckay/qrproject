
const whatsappButton = document.getElementById('whatasppButton')
const siteButton = document.getElementById('siteButton')
const instagramButton = document.getElementById('instagramButton')
const localButton = document.getElementById('localButton') 

let openSettings = false

function changeColor(button){
    //Tira a cor
    whatsappButton.style.color = 'var(--iconsDefaultColor)'
    siteButton.style.color = 'var(--iconsDefaultColor)'
    // wifiButton.style.color = 'var(--iconsDefaultColor)'
    instagramButton.style.color = 'var(--iconsDefaultColor)'
    localButton.style.color = 'var(--iconsDefaultColor)'

    //Tira a sombra
    whatsappButton.style.textShadow = ''
    siteButton.style.textShadow = ''
    instagramButton.style.textShadow = ''
    localButton.style.textShadow = ''

    //Coloca as cores
    button.style.color = 'var(--secondColor)'
    button.style.textShadow = '1px 1px 10px var(--secondColor)'
    
}

function openAndCloseSettings(){
    const settingsContainer = document.querySelector('#settingsContainer')

    settingsContainer.classList.toggle('hidden-settings')
    // if(openSettings === true){
    //     settingsContainer.style.display = 'none'
    //     openSettings = false
    // } else if(openSettings === false){
    //     settingsContainer.style.display = 'flex'
    //     openSettings = true
    // }

}

export {
    changeColor,
    openAndCloseSettings
}