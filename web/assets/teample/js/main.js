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

$(document).on('show.bs.modal', '.modal', function () {
    if ($(".modal-backdrop").length > -1) {
        $(".modal-backdrop").not(':first').remove();
    }
});