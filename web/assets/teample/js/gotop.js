window.onscroll = function(){
    // console.log(document.documentElement.scrollTop > 100);
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    } else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTop({
        top: 0,
        behavior: 'smooth'
    });
});