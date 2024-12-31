const submit=document.querySelector("#arrow")
const email= document.querySelector('input[type="email"]')
const err= document.querySelector('.err')
const err_msg= document.querySelector('.msg')


submit.addEventListener('click',()=>{
    if(email.value==='')
    {
        err_msg.classList.add('active')
        err.classList.add('active')
        ShowError();
    }
    
    const emailPattern = /^(?=.*\d)[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    if(!emailPattern.test(email.value))
        {
        err_msg.classList.add('active')
        err.classList.add('active')
        ShowError();
    }

})


 function ShowError()
 {
    setTimeout(() => {
        err_msg.classList.remove('active')
        err.classList.remove('active')
    }, 2000);
 }