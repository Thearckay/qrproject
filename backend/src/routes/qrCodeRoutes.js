const express = require('express')
const router = express.Router()
const qrServices = require('../services/qrCodeServices')
const mysql = require('mysql2')

//Whatsapp
router.post('/generateQr/whatsapp', async (req, res) => {
    
    const  number = req.body.input
    const typeQr = req.body.typeUrl
    const config = req.body.config

    const qrcode = await qrServices.createQrWhatsapp(number, typeQr, config)

    res.json({ 
        qrImg: qrcode,
        isValid: true
    })

})

//Instagram
router.post('/generateQr/instagram', async (req, res) =>{

    const instagram = req.body.input 
    const typeQr = req.body.typeUrl
    const config = req.body.config

    const qrcode = await qrServices.createQrInstagram(instagram, typeQr, config)

    res.json({
        qrImg: qrcode,
        isValid: true
    })
})

//site e outra opções
router.post('/generateQr/site', async (req, res) =>{
    const type = req.body.typeUrl
    const input = req.body.input
    const config = req.body.config

    const qrcode = await qrServices.createOtherQrType(type, input, config)

    res.json({
        qrImg: qrcode,
        isValid: true
    })
})

module.exports = router