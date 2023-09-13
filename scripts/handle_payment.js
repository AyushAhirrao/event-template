let upi_radio_btn = document.getElementById("online");
let cash_radio_btn = document.getElementById("offline");

upi_radio_btn.addEventListener('change', () => {
    if(upi_radio_btn.checked){
        console.log("display qr")
    }
})

cash_radio_btn.addEventListener('change', () => {
    if(cash_radio_btn.checked){
        console.log("hide qr")
    }
})