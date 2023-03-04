const modal = document.getElementById('modal');
const button = document.getElementById('modal-close-btn');
const formId = document.getElementById('consentForm');
const declineBtn = document.getElementById('decline-btn');
const modalText = document.getElementById('modal-text');
//const loginForm = document.getElementById('login-form')
const buttonContainer= document.getElementById('modal-choice-btns')

setTimeout(function(){
 modal.style.display = 'inline';
},1500);


button.addEventListener('click',function(){
     modal.style.display = 'none';
})

declineBtn.addEventListener('mouseenter', function(){
    // declineBtn.style.cursor = 'hover'
    buttonContainer.classList.toggle('reverse')
});




formId.addEventListener('submit',function(event){
    
    const formData = new FormData(formId);
    // console.log( formData.get('user_name')+ " " + formData.get('user_email'));
       event.preventDefault();
      modalText.innerHTML = `
      <div class="modal-inner-loading">
      <img src="loading.gif" class="loading">
      <p id="uploadText">
      Uploading your data to the dark web.....
      </p>
      </div>
      `
      setTimeout(function(){
        document.getElementById('uploadText').textContent= "Missing the sale....."
        
     },1500)

     setTimeout(function(){
        document.getElementById('modal-inner').innerHTML= `<h2>Thanks <span class="modal-display-name">${formData.get('user_name')}</span> , you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="laughing.gif">
        </div>`
        button.disabled = false;
     }, 3000);
        
})




