
const submit = document.getElementById('submit');
const message = document.getElementById('message');
const form = document.getElementById('myForm');
function verify(){
    
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    
    if(password === confirm){
        console.log('Success');
        message.style.display = 'block';
        message.innerHTML = 'Success';
        message.classList.add('success')
        message.classList.remove('error');
        
       
    }else{
        console.log('Error. Passwords do not match'); 
        message.classList.add('error');
        message.classList.remove('success');
        message.style.display = 'block';
        message.innerHTML = 'Error. Passwords do not match';
       
        
    }
    
}
// submit.addEventListener('click', ()=>{
//     verify();
// })


form.onsubmit = function(e){
    verify();
    e.preventDefault();
}