var a;
function pass(){
    if(a==1){
        document.getElementById('password').type='password';
        document.getElementById('pass-icon').src='pass-icon.png'
        a=0;
    }
    else{
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').src='pass-show.png'
        a=1;
    }
}