import {validateInputs} from './utils/validation.js'
import { changeColor, openAndCloseSettings } from './ui/effects.js'

// Selecionar tipo
const urlInput = document.querySelector('#textInput')
const generateButton = document.getElementById('generateButton')
const qrimg = document.getElementById('qrImg')
const downloadButton = document.getElementById('donwloadButton')
let typeQr = null
let typeQrStatus = 'um valor válido'

const whatsappButton = document.getElementById('whatasppButton')
const siteButton = document.getElementById('siteButton')
const instagramButton = document.getElementById('instagramButton')
const localButton = document.getElementById('localButton') 

const settingsButton = document.getElementById('settingsButton')
const alertContainer = document.getElementById('alertContainer')

//
    //Configurações
    const colorQrInput = document.getElementById('colorQrInput')
    const colorBackgroundQrInput = document.getElementById('colorBackgroundQrInput')
    const removeColorValues = document.getElementById('removeColorValues')

//

settingsButton.addEventListener('click', () =>{
    openAndCloseSettings()
})

generateButton.addEventListener('click', ()=>{
    sendData(validateInputs(typeQr, urlInput.value))
})

whatsappButton.addEventListener('click', ()=>{
    changeColor(whatsappButton)
    selectedType('whatsapp')
})
siteButton.addEventListener('click', ()=>{
    changeColor(siteButton)
    selectedType('site')
})

instagramButton.addEventListener('click', ()=>{
    changeColor(instagramButton)
    selectedType('instagram')
})
localButton.addEventListener('click', ()=>{
    changeColor(localButton)
    selectedType('local')
})

removeColorValues.addEventListener('click', ()=>{
    colorQrInput.value = '#000000'
    colorBackgroundQrInput.value = '#ffffff'
})


function selectedType(type){
    switch (type) {

        case 'whatsapp':
            urlInput.placeholder = 'Insira o número: Ex: 73 99999999'
            typeQr = 'whatsapp'
            typeQrStatus = 'um número válido'
            break;
        
        case 'site':
            urlInput.placeholder = 'Insira o link: Ex: http://Site.com.br | Ou texto'
            typeQr = 'site'
            typeQrStatus = 'uma Url válida'
            break;
        
        case 'wifi':
            urlInput.placeholder = 'Insira os dados do Wifi'
            typeQr= 'wifi'
            typeQrStatus = 'dados válidos'
            alert('Esse tipo de qr code não está disponivel!') //Falta fazer isso
            break;

        case 'instagram':
            urlInput.placeholder = 'Insira seu @; Ex: @thearckay'
            typeQr = 'instagram'
            typeQrStatus = 'um texto válido'
            break
        
        case 'local':
            urlInput.placeholder = 'Insira a Url da sua localização'
            typeQr = 'local'
            typeQrStatus = 'uma URL válida do maps'
            break
        default:
            alert('Esse tipo de qr code não está disponivel!')
            break;
    }
}

function alertErro(){
    alertContainer.classList.toggle('hideAlert')
    const errorText = document.getElementById('errorText')
    errorText.textContent = `Insira ${typeQrStatus}!`

    let interval = setInterval(() => {
        alertContainer.classList.toggle('hideAlert')
        clearInterval(interval)
    }, 4000);
}

async function sendData(obj){
    const type = obj.type
    const txtInputValidated = obj.input
    const isValid = obj.isValid

    const qrColor = colorQrInput.value
    const qrColorBackground = colorBackgroundQrInput.value
    

    // Depois da validação
    if(isValid === true){
    
        const response = await fetch(`/api/generateQr/${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                typeUrl: type,
                input: txtInputValidated,
                config: {
                    qrColor: qrColor,
                    qrBackgroundColor: qrColorBackground
                }
            })
        })

        const data = await response.json()

        downloadButton.addEventListener('click', ()=>{
            const a = document.createElement('a')
            a.href = data.qrImg
            a.download = `qrCode_${typeQr}`
            a.click()
        })

        qrimg.src = data.qrImg
        urlInput.value = ''

    } else {
        alertErro()
    }

}
