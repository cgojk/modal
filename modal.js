const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalText =document.getElementById('modal-text')
const consentForm = document.getElementById('consent-form')


 
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'

})



consentForm.addEventListener('submit',function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)

    const name=consentFormData.get('fullName')
   console.log(name)

    modalText.innerHTML=`
    <div class="modal-inner-loading">
    <img src="loading.svg" lass="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>`
setTimeout(function(){
    document.getElementById('upload-text').innerText=`Making de sale...`
},1500)


setTimeout(function(){
    document.getElementById("modal-inner").innerHTML=`
    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker!
    <p> We just sold the rights to your eternal soul</p>
    <div class="idiot-gif">
    <img src ="pirate.gif">
    </div>
    `
    modalCloseBtn.disabled = false;
},3000)
})
