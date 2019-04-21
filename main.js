let what = document.getElementById('Whatsapp');
let correo = document.getElementById('at');

let redes = document.getElementById('mostrar');

what.addEventListener('click', () => {

    
    if (redes.hasChildNodes()) {
        let span = document.createElement("span");
        span.appendChild(document.createTextNode("+58 416 669 4374"));
        redes.replaceChild(span, redes.firstChild);
    }else{    
        var contenido = document.createTextNode("+58 416 669 4374");
        //span.appendChild();
        let span = document.createElement("span");
        span.appendChild(contenido);
        redes.appendChild(span);
            
    }

});

correo.addEventListener('click', () => {

    if (redes.hasChildNodes()) {
        let span = document.createElement("span");
        span.appendChild(document.createTextNode("ing.leonardo.lovera@gmail.com"))
        redes.replaceChild(span, redes.firstChild);
    
    }else{
        var contenido = document.createTextNode("ing.leonardo.lovera@gmail.com");

        let span = document.createElement("span");
        span.appendChild(contenido);
        redes.appendChild(contenido);
    }
    
    
    
});



