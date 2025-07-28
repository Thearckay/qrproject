const qrcode = require('qrcode')
const mysql = require('mysql2')
const router = require('../routes/qrCodeRoutes')

async function createQrWhatsapp(number, typeQr, config = {}) {
    
    const qrColor = config.qrColor
    const qrBackgroundColor = config.qrBackgroundColor
    
    const opts = {
        color: {
            dark: qrColor,
            light: qrBackgroundColor
        }
    }
    
    // Validation 
        let inputArr = number
        let whatsppNumberArr = []
        let isValid = false

        for (let i = 0; i < inputArr.length; i++) {
            if (!isNaN(inputArr[i])) {
                whatsppNumberArr.push(inputArr[i])
            }
        }
        
        if (!isNaN(whatsppNumberArr[0])) {
            isValid = true
        }
    //

    let whatsappValidated = whatsppNumberArr.join().replaceAll(',', '')
    let dataBase = db.query(`INSERT INTO ${process.env.DB_DATABASE}(type_qr,input_qr) VALUES('${typeQr}', '${whatsappValidated}')`)
    
    let urlWhatsappApi = `https://wa.me/${whatsappValidated}`

    const qrcodeCreated = await qrcode.toDataURL(urlWhatsappApi, opts)

    if(isValid === true){
        return qrcodeCreated
    } else{
        console.log(`Erro ao tentar o Qr code para WhatsApp`)
    }

}

async function createQrInstagram(instagram, typeQr, config = {}) {

    const qrColor = config.qrColor
    const qrBackgroundColor = config.qrBackgroundColor
    
    const opts = {
        color: {
            dark: qrColor,
            light: qrBackgroundColor
        }
    }

    let url = `www.instagram.com/${instagram}`
    let dataBase = db.query(`INSERT INTO ${process.env.DB_DATABASE}(type_qr,input_qr) VALUES('${typeQr}', '${instagram}')`)

    const qrcodeCreated = await qrcode.toDataURL(url, opts)
    return qrcodeCreated

}

async function createOtherQrType(typeQr, input, config = {}) {
    //Create anyQrCode 
    const qrColor = config.qrColor
    const qrBackgroundColor = config.qrBackgroundColor
    
    const opts = {
        color: {
            dark: qrColor,
            light: qrBackgroundColor
        }
    }

    let dataBase = db.query(`INSERT INTO ${process.env.DB_DATABASE}(type_qr,input_qr) VALUES('${typeQr}', '${input}')`)
    const qrcodeCreated = await qrcode.toDataURL(input, opts)

    return qrcodeCreated

}


module.exports = {
    createQrInstagram,
    createQrWhatsapp,
    createOtherQrType
}

// Conection with dataBase
const db = mysql.createConnection({
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
})

db.connect((err) => {
    if (err) {
        console.log(`Houve um erro ao se conectar com o banco de dados! Erro: ${err}`)
    } else {
        console.log(`Services conectado com sucesso ao banco de dados!`)
    }
})