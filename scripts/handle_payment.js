let upi_radio_btn = document.getElementById("online");
let cash_radio_btn = document.getElementById("offline");
let qr_code = document.getElementById("online-payment")
let registration_code = document.getElementById("offline-payment")
const randomCode = generateRandomCode(10);

upi_radio_btn.addEventListener('change', () => {
    if (upi_radio_btn.checked) {
        qr_code.style = "display: flex"
        registration_code.style = "display: none"
        console.log("display qr")
    }
})

cash_radio_btn.addEventListener('change', () => {
    if (cash_radio_btn.checked) {

        qr_code.style = "display: none"
        registration_code.style = "display: flex"
        document.getElementById("registration-id").innerText = `Code - ${randomCode}`
        console.log("hide qr")
    }
})



function generateRandomCode(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCode = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomCode += charset[randomIndex];
    }

    return randomCode;
}