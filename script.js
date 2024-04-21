const generatebtn = document.querySelector('form button');
const qrcodebox = document.querySelector('.qr-code');
const qrinput = document.querySelector('form input');
const qriamge = document.querySelector('.qr-code img');


generatebtn.addEventListener('click', () => {
    let qrValue = qrinput.value;
    if (!qrValue) {
        return alert('لطفا یه متن یا ادرس وارد بکن')
    }

    generatebtn.innerHTML = ('در حال دریافت  QR Code')
    qriamge.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue} `
    qriamge.addEventListener('load', () => {
        qrcodebox.classList.remove('hidden');
        generatebtn.innerHTML=('تولید QR Code')

    })
})
qrinput.addEventListener('keyup', () => {
    if(!qrinput.value){
        qrcodebox.classList.add('hidden');

    }
})
   
    
