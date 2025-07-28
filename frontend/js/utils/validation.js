
function validateInputs(typeQr, txtInput) {

    const inputArr = txtInput.trim().split('')
    let whatsppNumberValidated = []
    let instagramValidated = []
    let isValid = false
    let input = inputArr.join().replaceAll(',', '')

    switch (typeQr) {
        case 'whatsapp':
            //return only numbers to main send to backend
            for (let i = 0; i < inputArr.length; i++) {
                if (!isNaN(inputArr[i])) {
                    whatsppNumberValidated.push(inputArr[i])
                }
            }

            if (!isNaN(whatsppNumberValidated[0])) {
                isValid = true
            }

            whatsppNumberValidated = whatsppNumberValidated.join().replaceAll(',', '')

            return {
                isValid: isValid,
                type: typeQr,
                input: whatsppNumberValidated
            }

        case 'site':
            let inputValidated = txtInput.trim()
            
            if (inputValidated === '')
                return {
                    isValid: true,
                    type: typeQr,
                    input: txtInput
                }

        case 'instagram':

            for (let i = 0; i < inputArr.length; i++) {
                if (inputArr[i] != '@') {
                    instagramValidated.push(inputArr[i])
                    isValid = true
                }
            }

            return {
                isValid: isValid,
                type: typeQr,
                input: instagramValidated.join().replaceAll(',', '')
            }

        case 'local':

        case null:
            
            if(input === ''){
                isValid = false
            } else {
                isValid = true
                typeQr = 'site'
            }
            
            return {
                isValid: isValid,
                type: typeQr,
                input: input
            }

        default:
            break;
    }

}

export { validateInputs } 