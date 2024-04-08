function callback(entries){
    console.log("Llamando al callback")
}

const options ={
    root: null,
    rootMargin: '0px' ,
    threshold: 0
}

// Corrige la selección del elemento
const element = document.querySelector('.element');

if (element) {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
} else {
    console.error("Elemento no encontrado");
}